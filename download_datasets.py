import pandas as pd
import requests
import os

# File paths
csv_file = "indian_laws_and_acts_v2.csv"  # Replace with your actual CSV file name
download_folder = "datasets"  # Folder to save downloaded files

# Create download folder if it doesn't exist
os.makedirs(download_folder, exist_ok=True)

# Load the dataset links
try:
    df = pd.read_csv(csv_file)

    if "url" not in df.columns:
        raise ValueError("CSV file must contain a 'url' column with dataset URLs.")
except Exception as e:
    print(f"Error reading CSV: {e}")
    exit()

# Download datasets
for index, row in df.iterrows():
    url = row["url"]
    filename = os.path.join(download_folder, f"dataset_{index}.pdf")  # Assuming it's a PDF

    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()  # Check for errors
        
        with open(filename, "wb") as file:
            for chunk in response.iter_content(chunk_size=1024):
                file.write(chunk)
        
        print(f"✅ Downloaded: {filename}")
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to download {url}: {e}")
