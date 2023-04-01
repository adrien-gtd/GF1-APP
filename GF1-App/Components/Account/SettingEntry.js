import { View, Text, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dropdown from '../Dropdown';
import { useState,useEffect } from 'react';
import SvgProfileComponentBig from '../SVGProfileComponentBig';
import AddToAsyncStorageButton from '../AddToAsyncStorageButton';

let nombresDePersonnes=[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'},{id:4,name:'4'},{id:5,name:'5'}];
let dietChoices=[{id:5,name:'Je mange de tout'},{id:1,name:'Végétarien'},{id:2,name:'Vegan'},{id:3,name:'Pas de porc'},{id:4,name:'Pescétarien'}]

const SettingEntry = ( {title} ) => {

  const[family,setFamily]=useState(null);
  //se déclenche quand la page est (re)loadée
  useEffect(()=>{
    AsyncStorage.getItem('family')
    .then((value)=>{
      setFamily(value);
    })
  })
  
  return (
    <View style={styles.account.container}>
      <ScrollView>
        <View style={styles.account.subcontainer}>
          <Text style={styles.account.title}>Qui mange quoi :</Text>
          <Dropdown 
            choices={nombresDePersonnes}
            storeKey={'family'}
            title='Nombre bouches à nourir'/>
          <Dropdown
            choices={dietChoices}
            storeKey={'diet'}
            title='Régime alimentaire'/>
        </View>
        <View style={styles.account.subcontainer}>
          <Text style={styles.account.title}>Equipements possédés :</Text>
            <AddToAsyncStorageButton
              storeKey={'Four'}
            />
            <AddToAsyncStorageButton
              storeKey={'Plaques chauffantes'}
            />
            <AddToAsyncStorageButton
              storeKey={'Four à micro-ondes'}
            />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default Account;