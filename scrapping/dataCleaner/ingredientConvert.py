import json
import random

def convert (fichier_in, fichier_out):
    curr_ingredient = []
    with open(fichier_in, 'r') as input_file:
        for line in input_file:
            data = json.loads(line)
            for ingredient in data["ingredients"]:
                for i in curr_ingredient:
                    if (i["ingredient_name"] == ingredient["ingredient_name"]):
                        break
                else:
                    del ingredient["ingredient_quantity"]
                    co2 = round(random.uniform(0.01, 0.1), 2)
                    price = round(random.uniform(0.01, 0.1), 2)
                    ingredient["price"] = price
                    ingredient["co2"] =  co2
                    curr_ingredient.append (ingredient)

    with open(fichier_out, 'w+') as file_:
        for ingredient in curr_ingredient:
            json.dump(ingredient, file_)
            file_.write("\n")


if __name__ == "__main__":
    convert("dataRecipe.jsonl", "dataIngredients.jsonl")
    print("ok")

