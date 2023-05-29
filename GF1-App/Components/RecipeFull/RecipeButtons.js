import React, { useState } from 'react';
import {Alert, View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";

import styles from '../../styles';
import { CONFIG } from '../../config';

const shoppingListKey = '@total'
const historyKey = "@history";



const RecipeButtons = ({ recipe, servings, setDescriptionVisibility, recipe_id }) => {

  const createAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: 'Ok',
        style: 'cancel',
      }]
    );
  }

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
    createAlert("Validation", "Ingrédients ajoutés à la liste de course !");
  }

  const addToHistory = async (data) => {
    try {
      let jsonValue = await AsyncStorage.getItem(historyKey);
      let history = JSON.parse(jsonValue);
      let date = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate();
      newHistoryItem = {history_id: history != null ? history.length : 0, recipe_id: data, date : date};
      history != null ? history.push(newHistoryItem) : history = [newHistoryItem];
      console.log();
      await AsyncStorage.setItem(historyKey, JSON.stringify(history));
      // Show confirmation message
      createAlert("Validation", "Recette ajouté à l'historique !");

    } catch (e) {
      console.log('Erreur en enregistrant les données:', e);
    }
  }

  return (
    <View style={styles.recipeFull.recipeButtons.container}>
      <TouchableOpacity 
        style={styles.recipeFull.recipeButtons.addToShoppingListButton}
        onPress={() => addToShoppingList({recipe, servings})}>
          <Image style={styles.recipeFull.recipeButtons.image} source={require('../../assets/addToCart.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.recipeFull.recipeButtons.doneRecipeButton}
      onPress={() => addToHistory(recipe_id)}>
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