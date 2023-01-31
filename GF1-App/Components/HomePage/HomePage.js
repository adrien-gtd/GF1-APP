import React from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';
import { COLORS } from '../../colors';

import styles from '../../styles';

import TopBar from '../TopBar';
import Recipe from '../Recipe';
import SearchBar from './SearchBar'

import tartiflette from "../../data/tartiflette"
import blanquette from "../../data/blanquette"
import soupe from "../../data/soupe"
import quicheChevreEpinards from "../../data/quicheChevreEpinards"
import saladeQuinoaLegumesGrilles from "../../data/saladeQuinoaLegumesGrilles"

const recipes = [tartiflette, saladeQuinoaLegumesGrilles, blanquette, quicheChevreEpinards, soupe];

const HomePage = ({ navigation: stackNavigation }) => {
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
          <Recipe id={recipes.indexOf(item)} image={item.image} title={item.name} ingredients={item.ingredients} ecoPrice={item.ecoPrice} moneyPrice={item.moneyPrice} description={item.description}/>
        )}
        numColumns={1}
      />
    </View>
  )
}


export default HomePage;