from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import difflib
import requests
from googleapiclient.discovery import build
from bs4 import BeautifulSoup
from difflib import SequenceMatcher
import random

app = Flask(__name__)
CORS(app)

API_KEY = 'AIzaSyCSJ5w31-nywLndXqv0CvcZ28_fQ3In5r4'
CSE_ID = '14d3ad641ccc9445d'

csv_file = "indian_laws_and_acts_v2.csv"

try:
    df = pd.read_csv(csv_file)
    print("CSV Loaded Successfully!")
except Exception as e:
    print("Error loading CSV:", e)
    df = None

last_results = []
last_question = ""
last_index = 0
pending_advice_topic = None

user_greetings = ["hi", "hello", "hey", "greetings", "good morning", "good evening"]

friendly_replies = [
    "Hello! How can I assist you with legal matters today?",
    "Hi there! Need help with a legal issue? I'm here for you.",
    "Hey! What legal topic can I help you understand today?",
    "Greetings! Ask me anything legal-related."
]

def fetch_description_google(title):
    try:
        service = build("customsearch", "v1", developerKey=API_KEY)
        res = service.cse().list(q=title + " India law", cx=CSE_ID).execute()
        if 'items' in res:
            return res['items'][0].get('snippet', '')
        return None
    except Exception as e:
        print("Google Search API Error:", e)
        return None

def fetch_description_wikipedia(title):
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{title.replace(' ', '_')}"
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            data = response.json()
            return data.get("extract", None)
        return None
    except Exception as e:
        print("Wikipedia Fetch Error:", e)
        return None

def fetch_description_indiankanoon(title):
    url = f"https://www.indiankanoon.org/search/?formInput={title.replace(' ', '+')}"
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            paragraphs = soup.find_all('p')
            content = [p.get_text(strip=True) for p in paragraphs if len(p.get_text(strip=True)) > 30]
            return ' '.join(content[:5]) if content else None
        return None
    except Exception as e:
        print("Indian Kanoon Fetch Error:", e)
        return None

def fetch_description(title):
    description = fetch_description_google(title)
    if not description:
        description = fetch_description_wikipedia(title)
    if not description:
        description = fetch_description_indiankanoon(title)
    return description if description else "No detailed description found. Check the link for more info."

def find_best_match(user_input, skip_advice=False):
    global last_results, last_question, last_index, pending_advice_topic

    if df is None:
        return {"answer": "Sorry, the legal database is currently unavailable."}

    user_input = user_input.lower()

    if user_input in user_greetings:
        return {"answer": random.choice(friendly_replies)}

    if user_input in ["yes", "yeah", "yup", "please do", "show me", "go ahead"]:
        if pending_advice_topic:
            query = pending_advice_topic
            pending_advice_topic = None
            return find_best_match(query, skip_advice=True)
        elif last_results:
            first = last_results[0]
            description = fetch_description(first["title"])
            return {
                "answer": f"""Here are the legal provisions related to <b>{first['title']}</b>:<br><br>
                {description}<br><a href='{first["url"]}' target='_blank'>View Details</a>"""
            }
        else:
            return {"answer": "Please ask a legal topic first so I know what you're referring to."}

    if not skip_advice and any(kw in user_input for kw in ["what should i do", "how to handle", "my husband", "violence", "harassment", "dowry", "abuse", "hit", "beat"]):
        advice = "It sounds like you're facing a difficult situation. Here's a general guide:\n"
        pending_advice_topic = None

        if "dowry" in user_input:
            pending_advice_topic = "dowry prohibition"
            advice += "\nIf someone is asking you for dowry, it's illegal under the Dowry Prohibition Act, 1961. You can report it to the police or consult a women's rights organization."

        if any(word in user_input for word in ["violence", "harassment", "abuse", "beat", "hit", "my husband"]):
            pending_advice_topic = "domestic violence"
            advice += "\nIf you're facing domestic abuse, laws like the Domestic Violence Act and IPC 498A offer protection. Reach out to a legal aid center or file a police complaint."

        advice += "\nWould you like me to show you relevant legal provisions or resources?"
        return {"answer": advice}

    all_words = set(word for title in df["title"].dropna().astype(str) for word in title.lower().split())
    corrected_input = []
    for word in user_input.split():
        close = difflib.get_close_matches(word, all_words, n=1, cutoff=0.8)
        corrected_input.append(close[0] if close else word)
    corrected_query = ' '.join(corrected_input)

    matched_rows = []
    exact_matches = df[df["title"].str.lower().str.contains(corrected_query, na=False)]
    if not exact_matches.empty:
        matched_rows = exact_matches.to_dict('records')
    else:
        titles = df["title"].astype(str).str.lower().tolist()
        for title in titles:
            ratio = SequenceMatcher(None, corrected_query, title).ratio()
            if ratio > 0.6:
                match_df = df[df["title"].str.lower() == title]
                if not match_df.empty:
                    matched_rows.append(match_df.iloc[0].to_dict())

        if not matched_rows:
            seen = set()
            for title in titles:
                if any(word in title for word in corrected_query.split()) and title not in seen:
                    match_df = df[df["title"].str.lower() == title]
                    if not match_df.empty:
                        matched_rows.append(match_df.iloc[0].to_dict())
                        seen.add(title)

    if not matched_rows:
        return {"answer": "I couldn't find an exact match, but you can check <a href='https://www.indiankanoon.org' target='_blank'>Legal Resources</a> for more information."}

    seen_titles = set()
    unique_rows = []
    for row in matched_rows:
        if row["title"] not in seen_titles:
            seen_titles.add(row["title"])
            unique_rows.append(row)

    unique_rows.sort(key=lambda x: SequenceMatcher(None, corrected_query, x['title'].lower()).ratio(), reverse=True)

    last_results = unique_rows
    last_question = corrected_query
    last_index = 3

    response = "Here is the information related to your query:<br><br>"
    for idx, row in enumerate(unique_rows[:last_index], start=1):
        description = "Click below to view more details." if idx > 1 else fetch_description(row["title"])
        response += f"<b>{idx}. {row['title']}</b><br>{description}<br><a href='{row['url']}' target='_blank'>View Details</a><br><br>"


    return {"answer": response}

@app.route("/ask", methods=["POST"])
def ask():
    user_input = request.json.get("question", "").strip()
    print(f"Received question: {user_input}")
    return jsonify(find_best_match(user_input))

@app.route("/followup", methods=["POST"])
def followup():
    global last_results, last_question
    user_input = request.json.get("question", "").lower().strip()

    if not last_results or not last_question:
        return jsonify({"answer": "Please ask an initial legal question first."})

    index_keywords = ["first", "second", "third", "fourth", "fifth"]
    digit_words = {"1": 0, "2": 1, "3": 2, "4": 3, "5": 4}

    index = None
    for i, word in enumerate(index_keywords):
        if word in user_input:
            index = i
            break

    if index is None:
        for digit, i in digit_words.items():
            if digit in user_input:
                index = i
                break

    if index is None:
        return jsonify({"answer": "I couldn't identify which act you want explained. Try saying something like 'explain the second act' or 'explain act 2'."})

    if index >= len(last_results):
        return jsonify({"answer": "That act number is out of range. Please try again with a valid one."})

    act = last_results[index]
    description = fetch_description(act["title"])
    response = f"<b>{index+1}. {act['title']}</b><br>{description}<br><a href='{act['url']}' target='_blank'>View Details</a><br><br>"

    return jsonify({"answer": response})

if __name__ == "__main__":
    app.run(debug=True)
