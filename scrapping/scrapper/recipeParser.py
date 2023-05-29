from bs4 import BeautifulSoup
import requests
import json
import random

count = 0

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
    informationsRecipe['ingredients'] = getIngrediants(url)


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

def getIngrediants(url):
    # Récupération du code HTML
    html = requests.get(url).text

    result = []
    global count
    condiment = ["muscade","basilic frais", "thym", "persil", "sel", "harissa", "épices à couscous", "origan", "chili", "paprika", "curcuma", "Parmesan", "romarin", "cassonade", "fond de veau", "moutarde de Dijon", "moutarde", "cumin en poudre", "coriandre", "anis", "citron", "quatre-épices", "vanille", "maïzena", "bicarbonate", "gélatine", "sucre vanillé", "eau de fleur d'oranger", "levure", "levure chimique", "céleri", "bouillon de volaille", "menthe", "beurre", "sucre en poudre", "gingembre", "cannelle", "poivre", "gros sel", "gousse", "sucre", "farine", "curry", "ail", "basilic"]
    # Création de l'objet BeautifulSoup
    soup = BeautifulSoup(html, 'html.parser')
    json_data_string = soup.find('script', {'id': '__NEXT_DATA__'}).string
    json_data  = json.loads(json_data_string)
    ingredients_list = json_data ["props"]["pageProps"]["recipeData"]["recipe"]["ingredientGroups"][0]["items"]
    for ingredient in ingredients_list:
        name = ingredient["name"]
        quantity = ingredient["ingredientQuantity"]
        unit = ingredient["unitName"]
        if (unit == 'l') :
            quantity = str(int(quantity) * 1000)
            unit  = 'ml'
        elif (unit == 'kg'):
            quantity = str(int(quantity) * 1000)
            unit  = 'g'
        elif (unit == 'cl'):
            quantity = str(int(quantity) * 100)
            unit  = 'ml'
        elif (unit == None):
            unit = ''
        elif (name in condiment):
            if (unit == 'cuill\u00e8re \u00e0 soupe'):
                unit = 'g'
                quantity = quantity * 10
            if (unit == 'cuill\u00e8re \u00e0 caf\u00e9'):
                unit = 'g'
                quantity = quantity * 5
            else:
                unit = 'g'
                quantity = str(10 * int(quantity))

        elif (unit != 'g' and unit != 'ml'):
            print(name, " ", unit, quantity, " ")
            unit = input("unit")
            quantity = input("quantity")
            count += 1 

            

        
        
        
        result.append({"ingredient_name": name , "ingredient_quantity": quantity , "unit": unit})
    print (count)
    return result

#Test du module:
if __name__ == '__main__':
    url = 'https://www.marmiton.org/recettes/recette_falafel-croquettes-de-pois-chiches_23038.aspx'
    d= getIngrediants(url)
    with open('dataUnique.txt', 'w+') as file_:
        file_.write(str(d))
