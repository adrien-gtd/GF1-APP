import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from '../../styles';

const RecipeButtons = ({ recipe }) => {
  return (
    <View style={styles.recipeFull.recipeButtons.container}>
      <TouchableOpacity style={styles.recipeFull.recipeButtons.instructionsButton}>
        <Image style={styles.recipeFull.recipeButtons.image} source={require('../../assets/addToCart.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.recipeFull.recipeButtons.doneRecipeButton}>
        <Image style={styles.recipeFull.recipeButtons.image} source={require('../../assets/recipeDone.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.recipeFull.recipeButtons.addToShoppingListButton}>
        <Image style={styles.recipeFull.recipeButtons.image} source={require('../../assets/recipeDescription.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default RecipeButtons;