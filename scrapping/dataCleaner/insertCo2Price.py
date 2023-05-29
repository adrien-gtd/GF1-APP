import json
import random
import os


def insert (input_, output):
    print("-------début--------")
    with open(input_, 'r') as input_file:
        with open(output, 'w+') as output_file:
            for line in input_file:
                data = json.loads(line)
                print("Le nom de l'ingrédient est: ", data["ingredient_name"])
                print("L'unité actuel est: ", "pas d'unité actuellement" if data["unit"] == '' else data["unit"])
                data["unit"] = input("Entrez une unité pour l'ingrédient: ")
                data["price"] = float(input("Entrez un prix/unité pour l'ingrédient: "))
                data["co2"] = float(input("Entrez une co2/unité pour l'ingrédient: "))
                json.dump(data, output_file)
                output_file.write("\n")
                os.system('cls')
    print("-------fin--------")
    return

if __name__ == "__main__":
    insert ("dataIngredients.jsonl","output.jsonl" )
