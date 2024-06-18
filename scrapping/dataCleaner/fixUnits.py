import json
import random
import os


def fix (input_, output):
    print("-------début--------")
    ingredients = []
    count = 0
    with open(input_, 'r') as input_file:
        with open(output, 'w+') as output_file:
            for line in input_file:
                data = json.loads(line)
                for ingredient in data["ingredients"]:
                    if ingredient["unit"] == '':
                        count += 1
                    
                        print("Le nom de l'ingrédient est: ", ingredient["ingredient_name"])
                        print("L'unité actuel est: ", "pas d'unité actuellement" if ingredient["unit"] == '' else ingredient["unit"])
                        print('Quantité actuelle: ', ingredient["ingredient_quantity"])
                        ingredient["unit"] = input("Entrez une unité pour l'ingrédient: ")
                        ingredient["ingredient_quantity"] = int(input("Entrez une quantité pour l'ingrédient: "))  
                        ingredients.append(ingredient)
                    else:
                        ingredients.append(ingredient)
                    os.system('clear')
                data["ingredients"] = ingredients
                json.dump(data, output_file)
                output_file.write("\n")
                ingredients = []
                
    print("-------fin--------", count)
    return

if __name__ == "__main__":
    fix ("dataRecipe.jsonl","output2.jsonl" )
