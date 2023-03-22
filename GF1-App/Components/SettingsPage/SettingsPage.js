import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles';
import Dropdown from '../Dropdown';

import {storeData,removeData,getData} from '../Store';

let diet=[{id:5,name:'Je mange de tout'},{id:1,name:'Végétarien'},{id:2,name:'Vegan'},{id:3,name:'Pas de porc'},{id:4,name:'Pescétarien'}]


const SettingsPage = ({}) => {
  const [selectedItem,setSelectedItem]=useState(null);
  let currentDiet=getData('diet');
  const onSelect=(item)=>{
    setSelectedItem(item);
    storeData('diet',item.name);
  }
  const getTitle= () =>{
    if(getData('diet')!=null){
      console.log(getData('diet'))
    
    }
    //const value = await AsyncStorage.getItem(key);
    //return value;
    return "test";
  }
  
  
  return(
  <View>
    <ScrollView>
    <Text>{}</Text>
    <Dropdown
    data={diet}
    value={selectedItem}
    onSelect={onSelect}
    title='Régime alimentaire'
    />
    </ScrollView>
    
    
    
  </View>
  )
}
export default SettingsPage;

