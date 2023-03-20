from bs4 import BeautifulSoup
import requests
import re
import json
from recipeParser import recipeParser

#Url contenant une liste de recettes
url = 'https://www.marmiton.org'
html = requests.get(url).text
soup = BeautifulSoup(html, 'html.parser')
urls = soup.find_all('a', href=re.compile('https://www.marmiton.org/recettes/'))

file_ = open('data.txt', 'w')

for url in urls:
    try:
        file_.write(str(recipeParser(url.get('href'))) + '\n')
    except:
        print("Erreur pour la rectte: " + url.get('href'))


