import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles';
import Dropdown from '../Dropdown';
import { COLORS } from '../../colors';
import { checkTheme } from '../Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


let dietChoices=[{id:5,name:'Je mange de tout'},{id:1,name:'Végétarien'},{id:2,name:'Vegan'},{id:3,name:'Pas de porc'},{id:4,name:'Pescétarien'}]
let themeChoices=[{id:1,name:'bright'},{id:2,name:'dark'}]

export const SettingsPage = ({}) => {
  
  const [globalTheme,setGlobalTheme]=useState(null);
  
  useEffect(()=>{
    AsyncStorage.getItem('theme')
    .then((value)=>{
      if(value=='dark'){
        setGlobalTheme(COLORS.darkThemeColor);
        console.log(value);
      }
      else{
        setGlobalTheme(COLORS.brightThemeColor);
      }
    })
  })

  

  return(
  <View style={{backgroundColor:globalTheme}}>
    <ScrollView>
    
    <Dropdown
      choices={dietChoices}
      storeKey={'diet'}
      title='Régime alimentaire'
    />
    <Text>Useless tex just here </Text>

<Dropdown
    choices={themeChoices}
    storeKey={'theme'}
    title="Thème de l'appli"/>


    </ScrollView>

  </View>
  )
}


