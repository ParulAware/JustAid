import requests
from bs4 import BeautifulSoup

url = "https://www.indiacode.nic.in/handle/123456789/1362/simple-search?query=women&sort_by=score&order=desc&rpp=10&etal=0&start=0"
headers = {"User-Agent": "Mozilla/5.0"}

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

# Find pagination section
pagination_section = soup.find("div", class_="pagination")  # Adjust class if needed

if pagination_section:
    print("Pagination Found:\n", pagination_section.prettify())
else:
    print("No pagination found.")
