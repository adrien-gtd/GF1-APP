from bs4 import BeautifulSoup
import requests
import json


def recipeParser(url):
    informationsRecipe = dict()

    # Récupération du code HTML
    html = requests.get(url).text

    # Création de l'objet BeautifulSoup
    soup = BeautifulSoup(html, 'html.parser')

    # Récupération du titre de la recette
    titre = soup.find_all('meta', {'property' : 'og:title'})[0]
    titre = titre['content']

    informationsRecipe['titre'] = titre


    # Récupération des ingrédients
    ingredients = soup.find_all('meta', {'property': 'og:description'})[0]
    ingredients = ingredients['content'].split(", ")

    informationsRecipe['ingredients'] = ingredients


    # Récupération de l'image
    image = soup.find('meta', {'property': 'og:image'})
    image = image['content']

    informationsRecipe['image'] = image



    # Récupération des instructions
    recipe_ingredients = soup.find('script', {'type': 'application/ld+json'}).text
    recipe_ingredients = json.loads(recipe_ingredients)
    instructionJson = recipe_ingredients['recipeInstructions']
    instructions = ""
    for i in range(len(instructionJson)):
        instructions += 'Etape ' + str(i+1) + ' : ' + instructionJson[i]['text'] + '\n'

    informationsRecipe['instructions'] = instructions
    return informationsRecipe


#Test du module:
if __name__ == '__main__':
    url = 'https://www.marmiton.org/recettes/recette_filet-de-poulet-au-curry_80990.aspx'
    d= recipeParser(url)
    for i in d:
        print(d[i])
