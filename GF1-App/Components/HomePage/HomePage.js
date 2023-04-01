import React, { useState, useEffect } from 'react';
import { View, StatusBar, FlatList, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../colors';
import styles from '../../styles';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopBar from '../TopBar';
import RecipePreview from '../RecipePreview';
import SearchBar from './SearchBar'

const randomRecipes = 6
const HomePage = ({ navigation: stackNavigation, }) => {
  
  const [ids, setIds] = useState([]);

  const [globalThemeStatusBar,setGlobalThemeStatusBar]=useState(null);
  const [globalTheme,setGlobalTheme]=useState(null);
  //se déclenche quand on arrive/bascule sur cette page
  useFocusEffect(()=>{
    AsyncStorage.getItem('theme')
    .then((value)=>{
      if(value=='dark'){
        setGlobalTheme(COLORS.darkThemeColor);
        setGlobalThemeStatusBar(COLORS.darkThemeColorItem);
      }
      else{
        setGlobalTheme(COLORS.brightThemeColor);
        setGlobalThemeStatusBar(COLORS.brightThemeColorItem);
      }
    })
  });

  useEffect(() => {
    fetchId();
  }, []);

  const fetchId = async () => {
    const response = await fetch('http://137.194.210.185/random/' + randomRecipes);
    const jsonData = await response.json();
    setIds(jsonData);
  };

  if (!ids) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{backgroundColor:globalTheme ,flex:1}}>
      <StatusBar
        animated={true}
        backgroundColor={globalThemeStatusBar}
        barStyle={'dark-content'}
        hidden={false} />
      <TopBar navigation={stackNavigation} />
      <SearchBar />
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