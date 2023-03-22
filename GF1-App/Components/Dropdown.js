
import React, { useState, useEffect } from 'react';
import {FlatList, View, StatusBar, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../colors';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dropdown=({
  choices,
  storeKey,
  title
}) =>{

  const [currentValue,setCurrentValue]=useState(null);
  const [showOption,setShowOption]=useState(false);

  useEffect(() => {
    const getData = async (storeKey) => {
      try {
        const value = await AsyncStorage.getItem(storeKey);
        if (value !== null) {
          setCurrentValue(value);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData(storeKey);
  }, []);
  
  const onSelectedItem = async (newValue) => {
    setShowOption(false);
    setCurrentValue(newValue);
    try {
      await AsyncStorage.setItem(storeKey, newValue);
    } catch (error) {
      console.log(error);
    }
  }
  if (currentValue == null) { console.log(currentValue); return <Text>Loading</Text>; }
  else {
  return(
    <View>
      <TouchableOpacity 
      style={styles.recipeFull.dropDown} 
      activeOpacity={0.8}
      onPress={()=> setShowOption(!showOption)}>
      <Text> {title} </Text>
      </TouchableOpacity>
        {showOption && (<View style={{backgroundColor:COLORS.dropwdownBackgroundColor,
        padding:5,
        marginBottom:10,
        paddingHorizontal:5,
    }}>
      {choices.map((item, index)=>{
        return(
            <TouchableOpacity
              key={String(index)}
              onPress={ () => onSelectedItem(item.name) }>
              <View style={currentValue == item.name ? styles.recipeFull.itemsDropdownSelected : styles.recipeFull.itemsDropdown}>
              <Text>{item.name}</Text> 
            </View>
          </TouchableOpacity>
        )
      })}</View>)}
    </View>
  )
}}
export default Dropdown;
