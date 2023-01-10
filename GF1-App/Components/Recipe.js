import { useLinkProps } from '@react-navigation/native';
import { View, Image, Text, FlatList} from 'react-native'
import { COLORS } from '../colors';
import styles from '../styles'



const ingredientsColumns = 2;
const ingredientsLines = 2;

const Recipe = ({image, title, ingredients, moneyPrice, ecoPrice}) => {

  if (ingredients.length > ingredientsLines * ingredientsColumns) {
    ingredients = ingredients.slice(0, ingredientsLines * ingredientsColumns);
  }

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
    <View style={styles.recipe.container}>
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
                    - {item.key}
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