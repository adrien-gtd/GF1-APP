import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import { COLORS } from '../../colors';
import styles from '../../styles'

import ServingIndicator from './ServingIndicator';


const RecipeFull = ({ route }) => {
  // Retrives the recipe from the API

  const { id } = route.params;
  const [data, setData] = useState(null);
  const [servings, updateServings] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://137.194.210.185:80/recipe/' + id);
    const jsonData = await response.json();
    jsonData.score_co2 = Math.floor(jsonData.score_co2);
    jsonData.score_prix = Math.floor(jsonData.score_prix);
    setData(jsonData);
  };

  if (!data) {
    return <Text>Loading...</Text>;
  }
  
  // Sets the leaf and euro images to the right color and number
  
  let ecoImages = [];
  let moneyImages = [];

  for (let i = 0; i < 3; i++) {
    ecoImages.push(
      <Image 
        key={i}
        style={styles.recipeFull.pricesIndicators.image} 
        source={(i <= data.score_co2) ? require('../../assets/leaf.png') : require('../../assets/leaf_empty.png')} 
        tintColor={COLORS.indicatorColors[Math.floor(data.score_co2)]}
      />
    )
    moneyImages.push(
      <Image 
        key={i}        
        style={styles.recipeFull.pricesIndicators.image} 
        source={(i <= data.score_prix) ? require('../../assets/euro.png') : require('../../assets/euro_empty.png')} 
        tintColor={COLORS.indicatorColors[Math.floor(data.score_prix)]}
      />
    )    
  }
  return (
    <View style={styles.recipeFull.container}>
      <Text style={styles.recipeFull.title} numberOfLines={1}>{data.recipe_name}</Text>
        <View style={styles.recipeFull.pricesIndicators.container}>
          <View style={styles.recipeFull.pricesIndicators.subcontainer}>
            {ecoImages}
          </View>
          <View style={styles.recipeFull.pricesIndicators.subcontainer}>
            {moneyImages}
          </View>
        </View>
        <Image
          style={styles.recipeFull.image} 
          source={{uri: data.image_uri}} />
        <View style={styles.recipeFull.ingredientsList.container}>      
          <Text style={styles.recipeFull.ingredientsList.title}>Ingredients : </Text>
          <ServingIndicator value={servings} updateValue={updateServings} />
          <FlatList
            data={data.ingredients}
            renderItem={({ item }) => (
              <View style={{flexDirection: 'row'}}>
              <View style={styles.recipeFull.ingredientsList.ingredientsNamesContainer}>
                <Text style={styles.recipeFull.ingredientsList.bulletPoint}>
                •
                </Text>
                <Text style={styles.recipeFull.ingredientsList.ingredient_name}>
                  {item.ingredient_name}
                </Text>
              </View>
              <Text style={styles.recipeFull.ingredientsList.quantity}>{item.quantity * servings}</Text>
              </View>
            )}
          />
        </View>
    </View>
  );
}

export default RecipeFull;