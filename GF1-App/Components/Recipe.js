import { useLinkProps } from '@react-navigation/native';
import { View, Image, Text, FlatList} from 'react-native'
import { COLORS } from '../colors';
import styles from '../styles'
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ingredientsColumns = 2;
const ingredientsLines = 2;

const Recipe = ({id, title, image, ingredients, moneyPrice, ecoPrice}) => {

  // Limits the number of ingredients that are to be displayed
  const [globalThemeContainer,setGlobalThemeContainer]=useState(null);
  const [globalThemeSubContainer,setGlobalThemeSubContainer]=useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('theme')
    .then((value)=>{
      if(value=='dark'){
        setGlobalThemeContainer(styles.recipe.darkContainer);
        setGlobalThemeSubContainer();
        
      }
      else{
        setGlobalThemeContainer(styles.recipe.brightContainer);
        setGlobalThemeSubContainer();

      }
    })
  })

  if (ingredients.length > ingredientsLines * ingredientsColumns) {
    ingredients = ingredients.slice(0, ingredientsLines * ingredientsColumns);
  }
  // Sets the leaf and euro images to the right color and number

  let ecoImages = [];
  let moneyImages = [];

  for (let i = 0; i < 3; i++) {
    ecoImages.push(
      <Image 
        key={i}
        style={styles.recipe.pricesIndicators.image} 
        source={(i <= ecoPrice) ? require('../assets/leaf.png') : require('../assets/leaf_empty.png')} 
        tintColor={COLORS.indicatorColors[ecoPrice]}
      />
    )
    moneyImages.push(
      <Image 
        key={i}
        style={styles.recipe.pricesIndicators.image} 
        source={(i <= moneyPrice) ? require('../assets/euro.png') : require('../assets/euro_empty.png')} 
        tintColor={COLORS.indicatorColors[moneyPrice]}
      />
    )    
  }
  
  return (
    <View style={globalThemeContainer}>
      <View style={styles.recipe.recipeInfo.container}>
        <Image 
            style={styles.recipe.recipeInfo.image} 
            source={image} />
        <View style={styles.recipe.recipeInfo.subcontainer}>
          <Text style={styles.recipe.recipeInfo.title} numberOfLines={1}>{title}</Text>      
          <Text>Ingredients : </Text>
          <View style={styles.recipe.recipeInfo.ingredientsList.container}>
            <FlatList
              data={ingredients}
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