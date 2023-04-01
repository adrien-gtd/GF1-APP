import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'

import Home from './Components/Home';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import RecipeFull from './Components/RecipeFull/RecipeFull';
import SettingsPage from './Components/SettingsPage/SettingsPage';
import Account from './Components/Account/Account';
import History from './Components/Budget/History';

const App = () => {
  const Stack = createNativeStackNavigator ();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name = 'home' options={{headerShown:false}} component={ Home } />
          <Stack.Screen name = 'shopping' component={ ShoppingList } />
          <Stack.Screen name = 'history' component={ History } />
          <Stack.Screen name = 'Account' component={ Account } />
          <Stack.Screen name = 'Settings' component={ SettingsPage } />
          <Stack.Screen name = 'recipeFull' options={{headerShown:false}} component={RecipeFull}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
