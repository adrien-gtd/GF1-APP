import { View, Text, StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';

import RecipeTest from '../RecipeTest/RecipeTest';

const SettingsPage = ({ navigation }) => {
  return (
    <View >
      <RecipeTest/>
    </View>
  )
}

export default SettingsPage;