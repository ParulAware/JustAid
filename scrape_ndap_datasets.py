from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import time
import os

# Set up Selenium WebDriver
chromedriver_path = "C:\\Users\\skawa\\OneDrive\\Desktop\\pbl\\chromedriver-win64\\chromedriver.exe"

chrome_options = Options()
chrome_options.add_argument("--headless")  # Run browser in headless mode
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open NDAP search page
base_url = "https://ndap.niti.gov.in/search?query=laws+and+justice&search=Variables%2CDatasetInfo"
driver.get(base_url)
wait = WebDriverWait(driver, 15)

# Wait for datasets to load
time.sleep(5)

# Create a folder to save datasets
save_folder = "NDAP_Laws_Datasets"
if not os.path.exists(save_folder):
    os.makedirs(save_folder)

# Function to download datasets
def download_file(url, file_name):
    response = requests.get(url, stream=True)
    file_path = os.path.join(save_folder, file_name)
    
    with open(file_path, "wb") as file:
        for chunk in response.iter_content(chunk_size=1024):
            file.write(chunk)
    print(f"✅ Downloaded: {file_name}")

# Scrape dataset links
dataset_links = []

try:
    datasets = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "dataset-card")))  # Check this class name
    for dataset in datasets:
        try:
            link_element = dataset.find_element(By.TAG_NAME, "a")
            dataset_url = link_element.get_attribute("href")
            dataset_links.append(dataset_url)
            print(f"🔗 Found dataset: {dataset_url}")
        except Exception as e:
            print("⚠️ Error extracting dataset link:", e)

except Exception as e:
    print("❌ Failed to find datasets. Possible reason: Website structure changed.")
    driver.quit()
    exit()

# Visit each dataset page and download files
for dataset_url in dataset_links:
    driver.get(dataset_url)
    time.sleep(5)
    
    try:
        download_buttons = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "download-btn")))  # Check this class name
        for btn in download_buttons:
            file_url = btn.get_attribute("href")
            if file_url.endswith(".zip") or file_url.endswith(".csv"):
                file_name = file_url.split("/")[-1]
                download_file(file_url, file_name)
    except Exception as e:
        print("⚠️ No download link found on:", dataset_url)

# Close browser
driver.quit()

print("\n✅ All datasets downloaded successfully!")
