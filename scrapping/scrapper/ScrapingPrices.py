import requests
from bs4 import BeautifulSoup
import json

# Send a GET request to the website
url = "https://rnm.franceagrimer.fr/prix?POULET"
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    html_content = response.text
else:
    print("Error occurred while retrieving the webpage.")

# Parse the HTML content
soup = BeautifulSoup(html_content, "html.parser")

# Find the table element
table = soup.find("table", class_="tabcot",id="tabcotmar")

# Find the table headers
headers = table.find_all("th")
header_names = [header.text.strip() for header in headers]

# Find the table rows
rows = table.find_all("tr")[1:]  # Exclude the header row

# Extract data from the table
data = []

for row in rows:
    cells = row.find_all("td")
    row_data = [cell.text.strip() for cell in cells]
    data.append(row_data)

# Create a list of dictionaries for each row
result = []

for row_data in data:
    row_dict = {}
    for i, value in enumerate(row_data):
        header_name = header_names[i]
        row_dict[header_name] = value
    result.append(row_dict)

# Save data to a JSON file
with open("chiken_averagePrice_data.json", "w") as json_file:
    json.dump(result, json_file)

print("Table data saved to chiken_averagePrice_data.json file.")

