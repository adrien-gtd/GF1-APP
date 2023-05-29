import requests
from bs4 import BeautifulSoup
import json

url = 'https://culture-crunch.com/2021/08/11/fruits-et-legumes-poids-et-rendement-moyens/'

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Scrape data from the first table
table1 = soup.find_all('table')[0]
rows1 = table1.find_all('tr')

data1 = []

for i in range(1,len(rows1)):
    cells = rows1[i].find_all('td')
    if len(cells) > 0:
        row_data = {}
        row_data['name'] = cells[0].text.strip().lower()
        row_data['poid moyen'] = float(cells[1].text.strip().replace(',', '.'))
        data1.append(row_data)

# Save data from the first table to a JSON file
with open('légumes_poids_moyens.json', 'w') as f:
    json.dump(data1, f)


# Scrape data from the second table
table2 = soup.find_all('table')[1]
rows2 = table2.find_all('tr')

data2 = []

for i in range(1,len(rows2)):
    cells = rows2[i].find_all('td')
    if len(cells) > 0:
        row_data = {}
        row_data['name'] = cells[0].text.strip().lower()
        row_data['poid moyen'] = float(cells[1].text.strip().replace(',', '.'))
        data2.append(row_data)

# Save data from the second table to a JSON file
with open('fruits_poids_moyens.json', 'w') as f:
    json.dump(data2, f)
