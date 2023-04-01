import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles';
import { CONFIG } from '../../config';

const shoppingListKey = '@total'

const RecipeButtons = ({ recipe, servings, setDescriptionVisibility }) => {
  const addToShoppingList = async ({recipe, servings}) => {
    let jsonValue = await AsyncStorage.getItem(shoppingListKey);
    let shoppingList = JSON.parse(jsonValue);
    recipe.ingredients.forEach(async (ingredient) => {
      const { ingredient_id, quantity } = ingredient;
      const response = await fetch(`http://${CONFIG.serverIp}:${CONFIG.serverPort}/getInfos/ingredient/${ingredient_id}`);
      const fetchedIngredient = await response.json();
      let index = shoppingList.findIndex((obj) => obj.id === parseInt(fetchedIngredient[0].ingredient_id));
      if (index !== -1) {
        shoppingList[index].quantity = parseInt(shoppingList[index].quantity) + quantity * servings;
        shoppingList[index].price = (parseFloat(shoppingList[index].price) + parseFloat(fetchedIngredient[0].price_per_unit * quantity * servings)).toFixed(2);
      }
      else {
        shoppingList = [
          ...shoppingList,
          {
            id: fetchedIngredient[0].ingredient_id,
            name: fetchedIngredient[0].ingredient_name,
            quantity: quantity,
            quantityType: fetchedIngredient[0].unit,
            price: (fetchedIngredient[0].price_per_unit * quantity).toFixed(2),
          },
        ];
      }
      await AsyncStorage.setItem(shoppingListKey, JSON.stringify(shoppingList));
    });
  }

  return (
    <View style={styles.recipeFull.recipeButtons.container}>
      <TouchableOpacity 
        style={styles.recipeFull.recipeButtons.addToShoppingListButton}
        onPress={() => addToShoppingList({recipe, servings})}>
          <Image style={styles.recipeFull.recipeButtons.image} source={require('../../assets/addToCart.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.recipeFull.recipeButtons.doneRecipeButton}>
        <Image style={styles.recipeFull.recipeButtons.image} source={require('../../assets/recipeDone.png')} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.recipeFull.recipeButtons.descriptionButton}
        onPress={() => setDescriptionVisibility(true)}>
        <Image style={styles.recipeFull.recipeButtons.image} source={require('../../assets/recipeDescription.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default RecipeButtons;