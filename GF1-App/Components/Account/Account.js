import { View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dropdown from '../Dropdown';
import { useState,useEffect } from 'react';
import { COLORS } from '../../colors';
import SvgProfileComponent from '../SVGProfileComponent';
import SvgProfileComponentBig from '../SVGProfileComponentBig';

let nombresDePersonnes=[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'},{id:4,name:'4'},{id:5,name:'5'}];
let dietChoices=[{id:5,name:'Je mange de tout'},{id:1,name:'Végétarien'},{id:2,name:'Vegan'},{id:3,name:'Pas de porc'},{id:4,name:'Pescétarien'}]

const Account = ({ navigation }) => {

  const [globalTheme,setGlobalTheme]=useState(null);
  const[family,setFamily]=useState(null);
  //se déclenche quand la page est (re)loadée
  useEffect(()=>{
    AsyncStorage.getItem('family')
    .then((value)=>{
      setFamily(value);

    })
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

  return (
    <View style={styles.container}>
      <View style={styles.Account.profileIcon}>
        <SvgProfileComponentBig />
      </View>
      <ScrollView>
      <Dropdown 
      choices={nombresDePersonnes}
      storeKey={'family'}
      title='Nombre bouches à nourir'/>
      <Dropdown
      choices={dietChoices}
      storeKey={'diet'}
      title='Régime alimentaire'
    />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  )
}

export default Account;