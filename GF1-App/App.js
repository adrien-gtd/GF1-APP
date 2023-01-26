import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Components/HomePage/Home';
import Budget from './Components/Budget/Budget';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import History from './Components/Budget/History';

const App = () => {
  const Stack = createNativeStackNavigator ();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name = 'home' options={{headerShown:false}} component={ Home } />
        <Stack.Screen name = 'budget' component={ Budget } />
        <Stack.Screen name = 'shopping' component={ ShoppingList } />
        <Stack.Screen name = 'history' component={ History } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
