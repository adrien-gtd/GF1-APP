import { View, Text, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles';
import Dropdown from '../Dropdown';
import { COLORS } from '../../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';


let themeChoices=[{id:1,name:'bright'},{id:2,name:'dark'}]
AsyncStorage.setItem('theme', 'bright')

const SettingsPage = ({}) => {
    const [globalTheme,setGlobalTheme]=useState(null);
  //se déclenche quand la page est (re)loadée
  useEffect(()=>{
    AsyncStorage.getItem('theme')
    .then((value)=>{
      if(value=='dark'){
        setGlobalTheme(COLORS.darkThemeColor);
      }
      else{
        setGlobalTheme(COLORS.brightThemeColor);
      }
    })
  })

  return(
  <View style={{backgroundColor:globalTheme ,flex : 6}}>
    <ScrollView>    
    <Text>Useless tex just here </Text>
  <Dropdown
      choices={themeChoices}
      storeKey={'theme'}
      title="Thème de l'appli"/>
    </ScrollView>
  </View>
  )
}

export default SettingsPage;