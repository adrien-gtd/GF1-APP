import React,{useEffect, useState} from 'react'
import {View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

const AddToAsyncStorageButton= ({storeKey})=>{
  const [value,setValue]=useState(null);
  useEffect(() => {
    fetchValue();
  }, []);

  const fetchValue = async () => {
    const res = await AsyncStorage.getItem(storeKey);
    setValue(res == "true");
  };

  const storeValue = async () => {
    await AsyncStorage.setItem(storeKey, (!value).toString());
    setValue(!value);
  };

  return (
    <View style={styles.settings.addToAsyncStorage.container}>
      <Text style={styles.settings.addToAsyncStorage.text}>{storeKey}</Text>  
      <TouchableOpacity
        style={[styles.settings.addToAsyncStorage.button,
                {backgroundColor: value ? 'lightgreen' : 'rgba(255, 102, 102, 1)'}
            ]}
        activeOpacity={0.8}
        onPress={()=>{ storeValue() }}>
        <Text style={{fontWeight:'bold'}}>{value ? "Yes" : "No"}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default AddToAsyncStorageButton;