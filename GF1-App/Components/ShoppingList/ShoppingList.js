import { Keyboard, View} from 'react-native';
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import ModalEditItem from './ModalEditItem';
import ModalNewItem from './ModalNewItem';
import ShoppingListContent from './ShoppingListContent';



const ShoppingList = ({ navigation }) => {
  const [data, setdata] = useState([]);
  const [isRender, setisRender] = useState(false);
  const [isModalVisibleEditItem, setisModalVisibleEditItem] = useState(false);
  const [isModalVisibleNewItem, setisModalVisibleNewItem] = useState(false);
  const [editItem, seteditItem] = useState();
  const [inputText, setinputText] = useState();



  const TOTAL_KEY = '@total';

  useEffect(() => {
    loadData();
  }, []);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
};

  const saveData = async (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(TOTAL_KEY, jsonValue);
    } catch (e) {
      console.log('Error saving data:', e);
    }
  };

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(TOTAL_KEY);
      const data = jsonValue != null ? JSON.parse(jsonValue) : [];
      setdata(data);
    } catch (e) {
      console.log('Error loading data:', e);
    }
  };

  return (
    <View style={styles.shoppingList.page}>

        <ShoppingListContent
        data = {data}
        isRender = {isRender}
        setisModalVisibleNewItem = {setisModalVisibleNewItem}
        seteditItem = {seteditItem}
        setisModalVisibleEditItem = {setisModalVisibleEditItem}
        setinputText = {setinputText}
        />

        <ModalEditItem 
        isModalVisibleEditItem = {isModalVisibleEditItem}
        setisModalVisibleEditItem = {setisModalVisibleEditItem}
        setinputText = {setinputText}
        dismissKeyboard = {dismissKeyboard}
        setdata = {setdata}
        setisRender = {setisRender}
        saveData = {saveData}
        isRender = {isRender}
        data = {data}
        inputText = {inputText}
        editItem = {editItem}
        />
      
        <ModalNewItem 
        isModalVisibleNewItem = {isModalVisibleNewItem}
        setisModalVisibleNewItem = {setisModalVisibleNewItem}
        dismissKeyboard = {dismissKeyboard}
        setdata = {setdata}
        setisRender = {setisRender}
        saveData = {saveData}
        isRender = {isRender}
        data = {data}
      />
  </View>
  )
}

export default ShoppingList;