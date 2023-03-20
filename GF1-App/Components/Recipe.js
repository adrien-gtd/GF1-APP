import React, { useState, useEffect } from 'react';
import { useLinkProps } from '@react-navigation/native';
import { View, Image, Text, FlatList} from 'react-native'
import { COLORS } from '../colors';
import styles from '../styles'

const ingredientsColumns = 2;
const ingredientsLines = 2;

const getRecipeFromApi = async ({id}) => {
  try {
    const response = await fetch(
      'http://localhost:3000/recipe/' + id,
    );
    const jsonRecipe = await response.json();
    console.log(jsonRecipe)
    return jsonRecipe;
  } catch (error) {
    console.error(error);
  }
};

const Recipe = ({id}) => {

  // Retrives the recipe from the API

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/recipe/1');
    const jsonData = await response.json();
    setData(jsonData);
  };

  if (!data) {
    return <Text>Loading...</Text>;
  }
  
  // Limits the number of ingredients that are to be displayed

  if (data.ingredients.length > ingredientsLines * ingredientsColumns) {
    data.ingredients = data.ingredients.slice(0, ingredientsLines * ingredientsColumns);
  }

  // Sets the leaf and euro images to the right color and number
  
  let ecoImages = [];
  let moneyImages = [];

  for (let i = 0; i < 3; i++) {
    ecoImages.push(
      <Image 
        key={i}
        style={styles.recipe.pricesIndicators.image} 
        source={(i <= data.ecoPrice) ? require('../assets/leaf.png') : require('../assets/leaf_empty.png')} 
        tintColor={COLORS.indicatorColors[data.ecoPrice]}
      />
    )
    moneyImages.push(
      <Image 
        key={i}
        style={styles.recipe.pricesIndicators.image} 
        source={(i <= data.moneyPrice) ? require('../assets/euro.png') : require('../assets/euro_empty.png')} 
        tintColor={COLORS.indicatorColors[data.moneyPrice]}
      />
    )    
  }
  return (
    <View style={styles.recipe.container}>
      <View style={styles.recipe.recipeInfo.container}>
        <Image 
            style={styles.recipe.recipeInfo.image} 
            source={{uri: data.image}} />
        <View style={styles.recipe.recipeInfo.subcontainer}>
          <Text style={styles.recipe.recipeInfo.title} numberOfLines={1}>{data.name}</Text>      
          <Text>Ingredients : </Text>
          <View style={styles.recipe.recipeInfo.ingredientsList.container}>
            <FlatList
              data={data.ingredients}
              renderItem={({ item }) => (
                <View style={styles.recipe.recipeInfo.ingredientsList.subcontainer}>
                  <Text 
                    style={styles.recipe.recipeInfo.ingredientsList.item}
                    numberOfLines={1}>
                    - {item}
                  </Text>
                </View>
              )}
              numColumns={2}
            />
          </View>
          <View style={styles.recipe.pricesIndicators.container}>
            <View style={styles.recipe.pricesIndicators.subcontainer}>
              {ecoImages}
            </View>
            <View style={styles.recipe.pricesIndicators.subcontainer}>
              {moneyImages}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Recipe;