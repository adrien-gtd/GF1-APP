import React,{useEffect, useState} from 'react'
import {View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

const AddToAsyncStorageButton= ({storeKey})=>{
  const [isAdded,setIsAdded]=useState('oui');
  let  key=storeKey;
  useEffect(()=>{
    AsyncStorage.getItem(key)
    .then((value)=>{
      if(value=='Oui'){
        setIsAdded('Oui');
      }
      else if(value=='Non'){
        setIsAdded('Non');
        }
        else if(value==null){
        setIsAdded('Oui');
        }
    })
  })
  return (
    <><><View >
    <Text style={styles.account.addToAsynStorageButton}>{storeKey}</Text>  
    <TouchableOpacity
    style={isAdded=='Oui' ? styles.account.addToAsynStorageButton.yes : styles.account.addToAsynStorageButton.no}
    activeOpacity={0.8}
    onPress={async()=>{
      AsyncStorage.getItem(storeKey).
      then((value)=>{
        if(value=='Oui'){
          setIsAdded('Non');
          AsyncStorage.setItem(key,'Non');
        }
        else{
          setIsAdded('Oui');
          AsyncStorage.setItem(key,'Oui');
        }
        console.log(value);
      })
      ;
    }}>
      <Text style={{fontWeight:'bold'}}>{isAdded}</Text>

    </TouchableOpacity>
  </View>
  
  </>
    </>
  );
}
export default AddToAsyncStorageButton;