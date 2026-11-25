import pandas as pd
from googlesearch import search
import time
import random
import logging

logging.basicConfig(filename="laws_with_descriptions.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def get_description(title):
    """Searches for a description of the given title."""
    try:
        results = search(title, num_results=3, stop=3)  # Increased results
        descriptions = []
        for result in results:
            descriptions.append(result)  # Append the URL for now

        if descriptions:
            return descriptions[0]  # Returning the first URL
        else:
            logging.info(f"No results found for: {title}")
            return "Description not found"

    except Exception as e:
        logging.error(f"Error searching for {title}: {e}")
        return "Search error"

try:
    df = pd.read_csv("title.txt", sep=',', header=0, on_bad_lines='warn')  # Important: Adjust 'sep' if needed
except FileNotFoundError:
    print("Error: CSV file not found.")
    exit()

df['description'] = ""

total_laws = len(df)
print(f"Total laws to process: {total_laws}")

for index, row in df.iterrows():
    title = row['title']
    try:
        description = get_description(title)
        df.loc[index, 'description'] = description
    except Exception as e:
        logging.error(f"Error processing title '{title}': {e}")
        df.loc[index, 'description'] = "Processing error"

    print(f"Processed {index + 1}/{total_laws}: {title}")
    time.sleep(random.uniform(2, 5))  # Be kind to search engines

df.to_csv("laws_with_descriptions.csv", index=False, encoding='utf-8')  # Explicit encoding
print("Processing complete. Results saved to laws_with_descriptions.csv")