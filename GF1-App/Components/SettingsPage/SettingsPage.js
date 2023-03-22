import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles';
import Dropdown from '../Dropdown';


let dietChoices=[{id:5,name:'Je mange de tout'},{id:1,name:'Végétarien'},{id:2,name:'Vegan'},{id:3,name:'Pas de porc'},{id:4,name:'Pescétarien'}]

const SettingsPage = ({}) => {
  const [diet,setDiet]=useState(null);

  const retrieveDiet = async () => {
    const data = await AsyncStorage.getItem('diet');
    setDiet(data);
  }

  console.log(diet)

  return(
  <View>
    <ScrollView>
    <Text>{}</Text>
    <Dropdown
      choices={dietChoices}
      storeKey={'diet'}
      title='Régime alimentaire'
    />
    </ScrollView>
  </View>
  )
}
export default SettingsPage;

