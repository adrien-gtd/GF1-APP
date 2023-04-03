from bs4 import BeautifulSoup
import requests
import re
import json
from recipeParser import recipeParser

urls = []
#Url contenant une liste de recettes
url_base = ['https://www.marmiton.org/recettes/index/categorie/plat-principal/', 'https://www.marmiton.org/recettes/index/categorie/dessert/', 'https://www.marmiton.org/recettes/index/categorie/entree/']
for url_ in url_base:
    html = requests.get(url_).text
    soup = BeautifulSoup(html, 'html.parser')
    urls += soup.find_all('a', href=re.compile('https://www.marmiton.org/recettes/'))


with open('dataRecipeTest.jsonl', 'w+') as file_:
    for url in urls:
        try:
            json.dump(recipeParser(url.get('href')), file_)
            file_.write("\n")
        except:
            print("Erreur pour la rectte: " + url.get('href'))


