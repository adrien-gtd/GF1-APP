import React, { useState, useEffect } from 'react';
import { useLinkProps } from '@react-navigation/native';
import { View, Image, Text, FlatList, TouchableOpacity} from 'react-native'
import { COLORS } from '../colors';
import styles from '../styles'

const ingredientsColumns = 2;
const ingredientsLines = 2;


const RecipePreview = ({id}) => {

  // Retrives the recipe from the API

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://137.194.210.185:80/recipe/' + id);
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
        style={styles.recipePreview.pricesIndicators.image} 
        source={(i <= data.ecoPrice) ? require('../assets/leaf.png') : require('../assets/leaf_empty.png')} 
        tintColor={COLORS.indicatorColors[data.ecoPrice]}
      />
    )
    moneyImages.push(
      <Image 
        key={i}
        style={styles.recipePreview.pricesIndicators.image} 
        source={(i <= data.moneyPrice) ? require('../assets/euro.png') : require('../assets/euro_empty.png')} 
        tintColor={COLORS.indicatorColors[data.moneyPrice]}
      />
    )    
  }
  return (
    <View style={styles.recipePreview.container}>
      <View style={styles.recipePreview.recipeInfo.container}>
        <Image 
            style={styles.recipePreview.recipeInfo.image} 
            source={{uri: data.image}} />
        <View style={styles.recipePreview.recipeInfo.subcontainer}>
          <Text style={styles.recipePreview.recipeInfo.title} numberOfLines={1}>{data.name}</Text>      
          <Text>Ingredients : </Text>
          <View style={styles.recipePreview.recipeInfo.ingredientsList.container}>
            <FlatList
              data={data.ingredients}
              renderItem={({ item }) => (
                <View style={styles.recipePreview.recipeInfo.ingredientsList.subcontainer}>
                  <Text 
                    style={styles.recipePreview.recipeInfo.ingredientsList.item}
                    numberOfLines={1}>
                    - {item}
                  </Text>
                </View>
              )}
              numColumns={2}
            />
          </View>
          <View style={styles.recipePreview.pricesIndicators.container}>
            <View style={styles.recipePreview.pricesIndicators.subcontainer}>
              {ecoImages}
            </View>
            <View style={styles.recipePreview.pricesIndicators.subcontainer}>
              {moneyImages}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RecipePreview;