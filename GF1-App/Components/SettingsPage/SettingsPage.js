import { View, Text, StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';

import RecipeTest from '../RecipeTest/RecipeTest';
import Store from '../Store';

const SettingsPage = ({ navigation }) => {
  state={count : 0};
  decrementCount(){
    let{count}=this.state;
    count++;
    this.setState({count})
  }
}

export default SettingsPage;