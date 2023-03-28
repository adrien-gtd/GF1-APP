import { View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dropdown from '../Dropdown';
import { useState,useEffect } from 'react';
import { COLORS } from '../../colors';
import SvgProfileComponentBig from '../SVGProfileComponentBig';
import AddToAsyncStorageButton from '../AddToAssyncstorageButton';

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
        setGlobalTheme(styles.Account.globalDark);
        
      }
      else{
        setGlobalTheme(styles.Account.globalBright);
      }
    })
  })

  return (
    <View style={globalTheme}>
      <View style={{alignItems:'center'}}>
      <View style={styles.Account.profileIcon}>
        <SvgProfileComponentBig />
      </View>
      </View>
      
      
      <ScrollView>
        <View style={{borderWidth: 1, borderRadius:10}}>
      <Text style={styles.homePage.suggestionText}>Qui mange quoi :</Text>
      <Dropdown 
      choices={nombresDePersonnes}
      storeKey={'family'}
      title='Nombre bouches à nourir'/>
      <Dropdown
      choices={dietChoices}
      storeKey={'diet'}
      title='Régime alimentaire'
    />
    <Text>       </Text>
    </View>
    <Text>   </Text>
    <View style={{borderWidth: 1, borderRadius:10}}>
    <Text style={styles.homePage.suggestionText}>Equipements possédés :</Text>
    <AddToAsyncStorageButton
    storeKey={'Four'}
    />
    <AddToAsyncStorageButton
    storeKey={'Plaques chauffantes'}
    />
    <AddToAsyncStorageButton
    storeKey={'Four à micro-ondes'}
    />
    <Text>  </Text>
    </View>


      </ScrollView>

      <StatusBar style="auto" />
    </View>
  )
}

export default Account;