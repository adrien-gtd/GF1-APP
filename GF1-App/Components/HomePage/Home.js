import React from 'react';
import { View, StatusBar, Button, Text, LogBox } from 'react-native';
import { COLORS } from '../../colors';

import styles from '../../styles';

import TopBar from '../TopBar';
import Recipe from '../Recipe';
import SearchBar from './SearchBar'

const ingredients = [
  { key: 'Pommes de terre' },
  { key: 'Saucisses montbeliard' },
  { key: 'Lard fumé' },
  { key: 'Oignons' },
  { key: 'Ail' },
  { key: 'Herbes de provence' },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.home.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.backgroundColor}
        barStyle={'dark-content'  }
        hidden={false} />
      <TopBar navigation={navigation} />
      <View>
        <SearchBar />
        <Text style={styles.home.suggestionText}>Suggestions :</Text>
        <Recipe image={require("../../assets/logo.png")} title={"Lorem ipsum"} ingredients={ingredients} ecoPrice={0} moneyPrice={0} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
        <Recipe image={require("../../assets/logo.png")} title={"Lorem ipsum"} ingredients={ingredients} ecoPrice={1} moneyPrice={1} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
        <Recipe image={require("../../assets/logo.png")} title={"Lorem ipsum"} ingredients={ingredients} ecoPrice={2} moneyPrice={2} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
        <Recipe image={require("../../assets/logo.png")} title={"Lorem ipsum"} ingredients={ingredients} ecoPrice={2} moneyPrice={2} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>

      </View>
    </View>
  )
}


export default Home;