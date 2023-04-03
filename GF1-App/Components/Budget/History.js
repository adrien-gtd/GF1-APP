import { TouchableOpacity, FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipePreview from '../RecipePreview';
import styles from '../../styles';

const historyKey = "@history";

const History = ({ navigation: stackNavigation,}) => {
  const [data, setData] = useState();

  useFocusEffect(() => {
    loadData();
  });

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(historyKey);
      const data = jsonValue != null ? JSON.parse(jsonValue) : [];
      setData(data);
    } catch (e) {
      console.log('Error loading data:', e);
    }
  };

  const clearHistory = async () => {
    await AsyncStorage.setItem(historyKey, '[]');
  }

  return (
    <>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => stackNavigation.navigate('recipeFull', {id : item.recipe_id})}
        >
          <RecipePreview id={item.recipe_id}/>
        </TouchableOpacity>
      )}
      keyExtractor = {(item) => item.history_id.toString()}
    />
    <View style = {styles.shoppingList.buttonContainer}>
      <TouchableOpacity
      onPress = {clearHistory}
      style = {styles.shoppingList.button}
      >
        <Text style = {styles.shoppingList.buttonText}>Effacer l'historique</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default History;