from flask import Flask, render_template, request, jsonify
import requests
import re

app = Flask(__name__, template_folder=r'C:\Users\skawa\OneDrive\Desktop\pbl\templates_')
GOOGLE_API_KEY = "AIzaSyAc26Z99DxBvb2TUeWYQhhts0RXNJKXmcY"
SEARCH_ENGINE_ID = "432c67eed4a594815"

# Function to clean up the text by removing unnecessary whitespaces and formatting
def clean(text):
    return re.sub(r'\s+', ' ', text).strip().replace("...", "")

# Function to fetch eBook links based on the user's query
def fetch_ebooks(query, num_results=5):
    # Dynamically search for the topic and look for PDF files only (filetype:pdf)
    url = f"https://www.googleapis.com/customsearch/v1?q={query} filetype:pdf&key={GOOGLE_API_KEY}&cx={SEARCH_ENGINE_ID}"
    response = requests.get(url)
    data = response.json()
    ebooks = []
    
    # Parse the results and extract the eBook titles and links
    if "items" in data:
        for item in data["items"][:num_results]:
            title = clean(item.get("title", ""))
            link = clean(item.get("link", "#"))
            if title and link:
                ebooks.append({"title": title, "link": link})
                
    return ebooks

# Route for the home page (index)
@app.route('/')
def index():
    return render_template("index_new.html")

# Route for generating resources (ebooks in this case)
@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    topic = data.get("topic")
    resource_type = data.get("resourceType")

    if resource_type == "ebook":
        # Ensure the query contains the entered topic, this will dynamically update the search
        ebooks = fetch_ebooks(f"{topic} legal eBooks", 10)  # Search for legal eBooks related to the topic
        return jsonify({"ebooks": ebooks})

    return jsonify({"error": "Invalid resource type"}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, port=5001)
