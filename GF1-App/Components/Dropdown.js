
import React, { useState, useEffect } from 'react';
import {FlatList, View, StatusBar, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../colors';
import styles  from '../styles';
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
        else {
          try {
            await AsyncStorage.setItem(storeKey, choices[0].name);
            setCurrentValue(choices[0].name);
          } catch (error) {
            console.log(error);
          }
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

    if(storeKey!=null) {
      try {
        await AsyncStorage.setItem(storeKey, newValue);
      } catch (error) {
        console.log(error);
      }
    }
  }
  if (currentValue == null) { console.log(currentValue); return <Text>Loading</Text>; }
  else {
  return(
    <View>
      <TouchableOpacity 
      style={styles.settings.dropDown} 
      activeOpacity={0.8}
      onPress={()=> setShowOption(!showOption)}>
      <Text style={{fontWeight:'bold'}}> {title} </Text>
      </TouchableOpacity>
        {showOption && (<View style={styles.settings.dropdownItemsContainer}>
      {choices.map((item, index)=>{
        return(
          <TouchableOpacity
            key={String(index)}
            onPress={ () => onSelectedItem(item.name) }>
            <View style={currentValue == item.name ? styles.settings.itemsDropdownSelected : styles.settings.itemsDropdown}>
              <Text>{item.name}</Text> 
            </View>
          </TouchableOpacity>
        )
      })}</View>)}
    </View>
  )
}}
export default Dropdown;
