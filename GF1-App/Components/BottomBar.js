import React, { useState } from 'react'
import { View, TouchableHighlight, Image, Text, TextInput } from 'react-native'
import styles from '../styles'
import ShoppingList from './ShoppingList/ShoppingList';
import Budget from './Budget/Budget';

/*

const BottomBar = ({ navigation }) => {
  return(  
    <View style={styles.BottomBar.container}>
      <TouchableHighlight 
        style={styles.BottomBar.accountButton} 
        onPress={() => {navigation.navigate('account')}}  
        underlayColor={COLORS.backgroundColorDarker}>
        <Image   
          style={styles.BottomBar.accountImage} 
          source={require('../assets/account.png')} />  
      </TouchableHighlight>
      <Image style={styles.BottomBar.homeImage} source={require('../assets/logoHalf.png')} />
      <TouchableHighlight 
        style={styles.BottomBar.settingsButton}
        onPress={() => navigation.navigate('settings')}
        underlayColor={COLORS.backgroundColorDarker}>
        <Image 
          style={styles.BottomBar.settingsImage} 
          source={require('../assets/settings.png')} />
      </TouchableHighlight>
    </View>
  );
}

//<View style={{flex: 1, alignSelf: 'flex-end}}'}} >

export default BottomBar;

*/