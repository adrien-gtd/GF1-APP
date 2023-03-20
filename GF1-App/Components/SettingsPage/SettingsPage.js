import { View, Text, StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';

import RecipeFull from '../RecipeFull/RecipeFull';

const SettingsPage = ({ navigation }) => {
  return (
    <View >
      <RecipeFull/>
    </View>
  )
}

export default SettingsPage;