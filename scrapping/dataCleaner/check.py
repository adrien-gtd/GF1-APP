import json
import random
import os

def check(recipes, ingredients):
    # ingredients_list = []
    count = 0
    with open(ingredients, 'r') as ingredient_file:
        for line in ingredient_file:
            data = json.loads(line)
            if data["unit"] != 'g' and data["unit"] != 'ml': 
                print(data["unit"])
            else:
                count += 1
    print(count)

    # with open(recipes, 'r') as recipe_file:
    #     for line in recipe_file:
    #         data = json.loads(line)
    #         for ingredient_ in data["ingredients"]:
    #             if not ingredient_["ingredient_name"] in ingredients_list:
    #                 print(ingredient_["ingredient_name"])
    #             else:
    #                 count += 1

if __name__ == "__main__":
    check("../data/dataRecipe.jsonl", "../data/dataIngredients.jsonl")
