import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import { COLORS } from '../../colors';
import styles from '../../styles'

import ServingIndicator from './ServingIndicator';


const RecipeFull = ({ route }) => {
  // Retrives the recipe from the API

  const { id } = route.params;
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
  
  // Sets the leaf and euro images to the right color and number
  
  let ecoImages = [];
  let moneyImages = [];

  for (let i = 0; i < 3; i++) {
    ecoImages.push(
      <Image 
        key={i}
        style={styles.recipeFull.pricesIndicators.image} 
        source={(i <= data.ecoPrice) ? require('../../assets/leaf.png') : require('../../assets/leaf_empty.png')} 
        tintColor={COLORS.indicatorColors[data.ecoPrice]}
      />
    )
    moneyImages.push(
      <Image 
        key={i}
        style={styles.recipeFull.pricesIndicators.image} 
        source={(i <= data.moneyPrice) ? require('../../assets/euro.png') : require('../../assets/euro_empty.png')} 
        tintColor={COLORS.indicatorColors[data.moneyPrice]}
      />
    )    
  }
  return (
    <View style={styles.recipeFull.container}>
      <Text style={styles.recipeFull.title} numberOfLines={1}>{data.name}</Text>
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
          source={{uri: data.image}} />
        <View style={styles.recipeFull.ingredientsList.container}>      
          <Text style={styles.recipeFull.ingredientsList.title}>Ingredients : </Text>
          <ServingIndicator/>
          <FlatList
            data={data.ingredients}
            renderItem={({ item }) => (
              <View style={styles.recipeFull.ingredientsList.ingredientsNamesContainer}>
                <Text style={styles.recipeFull.ingredientsList.bulletPoint}>•</Text>
                <Text 
                  style={styles.recipeFull.ingredientsList.item}
                  >
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
    </View>
  );
}

export default RecipeFull;