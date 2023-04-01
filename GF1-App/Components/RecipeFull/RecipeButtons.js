import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles';
import { CONFIG } from '../../config';

const shoppingListKey = '@total'

const RecipeButtons = ({ recipe, servings, setDescriptionVisibility }) => {

  const addToShoppingList = async ({recipe, servings}) => {
    const shoppingList = await AsyncStorage.getItem(shoppingListKey);
    recipe.ingredients.forEach(async (ingredient) => {
      const { ingredient_id } = ingredient;
      const response = await fetch(`http://${CONFIG.serverIp}:${CONFIG.serverPort}/getInfos/ingredient/${ingredient_id}`);
      const fetchedIngredient = await response.json();
      console.log(fetchedIngredient);
      
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