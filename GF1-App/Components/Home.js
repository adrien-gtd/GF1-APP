import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage/HomePage';
import ShoppingList from './ShoppingList/ShoppingList';
import Budget from './Budget/Budget';

import styles from '../styles';

const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="HomePage">
      <Tab.Screen 
        name="Budget"
        component={Budget}
        options={{tabBarIcon: ({ focused, color, size }) => {
          return <Image 
            style={styles.tabNavigator.budget} 
            source={require('../assets/euro.png')} 
            tintColor={focused ? 'green' : 'black'}
          />
        },}} />
      <Tab.Screen 
        name="HomePage" 
        component={HomePage} 
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Image 
              style={styles.tabNavigator.home} 
              source={require('../assets/home.png')} 
              tintColor={focused ? 'green' : 'black'}
            />
          },
          headerShown:false,
          }} />
      <Tab.Screen 
        name="Shopping List" 
        component={ShoppingList} 
        options={{tabBarIcon: ({ focused, color, size }) => {
          return <Image 
            style={styles.tabNavigator.shopping}
            source={require('../assets/shopping_cart.png')} 
            tintColor={focused ? 'green' : 'black'}
          />
        },}} />
    </Tab.Navigator>
  );
}

export default Home;