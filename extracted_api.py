import pandas as pd
import json

# Load dataset
df = pd.read_csv("dataset_links.csv")

# Function to safely parse JSON
def safe_json_load(x):
    try:
        return json.loads(x.replace("'", "\"")) if isinstance(x, str) else x  # Fix single quotes
    except json.JSONDecodeError:
        return None  # Skip invalid JSON

# Apply the fix
df["details"] = df["details"].apply(safe_json_load)

# Extract URLs
def extract_urls(details):
    if isinstance(details, list):  
        urls = [entry.get("url") for entry in details if isinstance(entry, dict) and "url" in entry]
        return urls if urls else None
    return None

df["api_urls"] = df["details"].apply(extract_urls)

# Flatten and save
api_urls_list = df["api_urls"].dropna().explode().tolist()
pd.DataFrame({"api_urls": api_urls_list}).to_csv("extracted_api_urls.csv", index=False)

print("✅ Extracted API URLs saved in 'extracted_api_urls.csv'")
