from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import time

# Set ChromeDriver path
chromedriver_path = "C:\\Users\\skawa\\OneDrive\\Desktop\\pbl\\chromedriver-win64\\chromedriver.exe"

# Configure Selenium
chrome_options = Options()
# chrome_options.add_argument("--headless")  # Enable for silent scraping
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open the India Code website
base_url = "https://www.indiacode.nic.in/"
driver.get(base_url)

# Wait for the page to load
wait = WebDriverWait(driver, 15)

# Function to scrape laws from the search results
def scrape_laws(keyword):
    try:
        print(f"🔍 Searching for: {keyword}")

        # Enter the search keyword
        search_box = wait.until(EC.presence_of_element_located((By.NAME, "search")))
        search_box.clear()
        search_box.send_keys(keyword)
        search_box.send_keys(Keys.RETURN)

        # Wait for results to load
        time.sleep(5)

        # Extract table rows
        laws = []
        rows = wait.until(EC.presence_of_all_elements_located((By.XPATH, "//table/tbody/tr")))

        for row in rows:
            try:
                columns = row.find_elements(By.TAG_NAME, "td")
                if len(columns) >= 3:
                    act_name = columns[2].text.strip()
                    link_element = columns[-1].find_element(By.TAG_NAME, "a")
                    act_link = link_element.get_attribute("href")

                    laws.append({"law": act_name, "link": act_link})
                    print(f"✅ Scraped: {act_name}")

            except Exception as e:
                print("⚠️ Error extracting data:", e)

        return laws

    except Exception as e:
        print(f"❌ Error scraping {keyword}: {e}")
        return []

# Keywords to search
keywords = ["women", "child"]

# Scrape data for each keyword
all_laws = {}
for keyword in keywords:
    all_laws[keyword] = scrape_laws(keyword)
    time.sleep(3)

# Save results to JSON
with open("laws_data.json", "w", encoding="utf-8") as f:
    json.dump(all_laws, f, indent=4)

print("\n✅ Scraping complete. Data saved to laws_data.json")
driver.quit()
