import React from 'react';
import { View, StatusBar, FlatList, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../colors';

import styles from '../../styles';

import TopBar from '../TopBar';
import RecipePreview from '../RecipePreview';
import SearchBar from './SearchBar'

import tartiflette from "../../data/tartiflette"
import blanquette from "../../data/blanquette"
import soupe from "../../data/soupe"
import quicheChevreEpinards from "../../data/quicheChevreEpinards"
import saladeQuinoaLegumesGrilles from "../../data/saladeQuinoaLegumesGrilles"

//const recipes = [tartiflette, saladeQuinoaLegumesGrilles, blanquette, quicheChevreEpinards, soupe];
const recipes = [1,2,3,4,5];

const HomePage = ({ navigation: stackNavigation, }) => {
  return (
    <View style={styles.homePage.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.backgroundColor}
        barStyle={'dark-content'}
        hidden={false} />
      <TopBar navigation={stackNavigation} />
      <SearchBar />
      <Text style={styles.homePage.suggestionText}>Suggestions :</Text>
      <FlatList
        data={recipes}
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