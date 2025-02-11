import React, { useState, useEffect } from 'react';
import { View, StatusBar, FlatList, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../colors';
import styles from '../../styles';
import { CONFIG } from '../../config'

import TopBar from '../TopBar';
import RecipePreview from '../RecipePreview';
import SearchBar from './SearchBar'
const randomRecipes = 6
const HomePage = ({ navigation: stackNavigation, }) => {
  
  const [ids, setIds] = useState([]);

  useEffect(() => {
    fetchId();
  }, []);

  const fetchId = async () => {
    const response = await fetch('http://' + CONFIG.serverIp + ":" + CONFIG.serverPort + '/random/' + randomRecipes);
    const jsonData = await response.json();
    setIds(jsonData);
  };

  if (!ids) {
    return <Text>Loading...</Text>;
  }

  const onOutput = (recipe_id) => {
    if(recipe_id !== undefined) {
      stackNavigation.navigate('recipeFull', {id : recipe_id});
    }
  } 

  return (
    <View style={styles.homePage.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.backgroundColor}
        barStyle={'dark-content'}
        hidden={false} />
      <TopBar navigation={stackNavigation} />
      <SearchBar onOutput = {onOutput}/>
      <Text style={styles.homePage.suggestionText}>Suggestions :</Text>
      <FlatList
        data={ids}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => stackNavigation.navigate('recipeFull', {id : item})}
          >
            <RecipePreview id={item}/>
          </TouchableOpacity>
        )}
        numColumns={1}
      />
    </View>
  )
}


export default HomePage;