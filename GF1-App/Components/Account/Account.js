import { View, Text, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dropdown from '../Dropdown';
import { useState,useEffect } from 'react';
import AddToAsyncStorageButton from '../AddToAsyncStorageButton';

let nombresDePersonnes=[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'},{id:4,name:'4'},{id:5,name:'5'}];
let dietChoices=[{id:5,name:'Omnivore'},{id:1,name:'Végétarien'},{id:2,name:'Vegan'},{id:3,name:'Pas de porc'},{id:4,name:'Pescétarien'}]

const Account = ({ navigation }) => {
  
  return (
    <View style={styles.settings.container}>
      <ScrollView>
        <View style={styles.settings.subcontainer}>
          <Text style={styles.settings.title}>Membres du foyer</Text>
          <Dropdown 
            choices={nombresDePersonnes}
            storeKey={'family'}
            title='Sélectionner...'/>
        </View>
        <View style={styles.settings.subcontainer}>
          <Text style={styles.settings.title}>Régime alimentaire :</Text>
          <Dropdown
            choices={dietChoices}
            storeKey={'diet'}
            title='Sélectionner...'/>
        </View>
        <View style={styles.settings.subcontainer}>
          <Text style={styles.settings.title}>Equipements possédés :</Text>
          <AddToAsyncStorageButton storeKey={'Four'} />
          <AddToAsyncStorageButton storeKey={'Plaques chauffantes'} />
          <AddToAsyncStorageButton storeKey={'Four à micro-ondes'} />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default Account;