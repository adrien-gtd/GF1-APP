import React, { useState } from 'react'
import { View, TouchableHighlight, Image, Text, TextInput } from 'react-native'
import styles from '../styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingList from './ShoppingList/ShoppingList';
import Budget from './Budget/Budget';


const Tab = createBottomTabNavigator();
  
  const BottomBar = ({ navigation }) => {
    return (
        <Tab.Navigator>
            
          <Tab.Screen name="ShoppingList" component={ShoppingList} />
          <Tab.Screen name="Budget" component={Budget} />
        </Tab.Navigator>
      );
  }
  
  export default BottomBar;