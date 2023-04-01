import styles from '../../styles';
import {Alert, TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
import SearchBar from './SearchBar';
import React, {useState} from 'react';

const ModalNewItem = ({
    isModalVisibleNewItem,
    setisModalVisibleNewItem,
    dismissKeyboard,
    setdata,
    setisRender,
    saveData,
    isRender,
    data
}) =>  {

    const [newItem, setNewItem] = useState();
    const [newQuantity, setNewQuantity] = useState();


    const creatAlert = (title, message) => {
      Alert.alert(title, message, [
        {
          text: 'Ok',
          style: 'cancel',
        }]
      );
    }

    const alreadyExist = (result) => {
      const newData = [...data];
      newData[result].quantity += newQuantity;
      newData[result].price += newItem.price_per_unit * newQuantity;
    }


    const handleCreate = () => {
      const newData = [
        ...data,
        {
          id: newItem.ingredient_id,
          name: newItem.ingredient_name,
          quantity: newQuantity,
          quantityType: newItem.unit,
          price: (newItem.price_per_unit * newQuantity).toFixed(2),
        },
      ];
      return newData;
    }

    const addItem = () => {
      if (newItem !== undefined && newQuantity !== undefined) {
        const result = data.findIndex((obj) => obj.id === newItem.ingredient_id);
        if (result !== -1) {
          newData = alreadyExist(result);
        } else {
          newData = handleCreate();
        }
        setdata(newData);
        setisRender(!isRender);
        setNewItem();
        setNewQuantity();
        saveData(newData);
        setisModalVisibleNewItem(false)
      }
      else {
        if (newItem === undefined) {
          creatAlert("Erreur", "Ingrédient non valide.");
          console.log("Ingrédient non valide !!");
        } else {
          creatAlert("Erreur", "Quantité non valide.");
          console.log("Quantité non valide !!");
        }
      }
    };

    const handleOutPut = (output) => {
        setNewItem(output)
      };

    return (
        <Modal  
            animationType = 'fade'
            visible = {isModalVisibleNewItem}
            onRequestClose = {() => setisModalVisibleNewItem (false)} 
        >
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style = {styles.shoppingList.modalView}>
                <Text style = {styles.shoppingList.text}>Add item</Text>
                <Text style = {styles.shoppingList.text}>Item Name: </Text>
                <SearchBar 
                  onOutput = {handleOutPut}
                  creatAlert = {creatAlert}
                />
                <Text style = {styles.shoppingList.text}>Quantity: </Text>
                <TextInput
                style={styles.shoppingList.searchBar}
                defaultValue = {newQuantity}
                onChangeText = {(int) => setNewQuantity(int)}
                keyboardType="numeric"
                editable = {true}
                multiline = {false}
                maxLength = {200}
                /> 
                <View style = {styles.shoppingList.buttonContainer}>
                <TouchableOpacity
                    onPress = {() => addItem()} 
                    style = {styles.shoppingList.button}
                >
                    <Text style = {styles.shoppingList.buttonText}>Add Item</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => {setisModalVisibleNewItem(false); setNewQuantity();setNewItem() }} 
                    style = {styles.shoppingList.button}
                >
                    <Text style = {styles.shoppingList.buttonText}>Quit</Text>

                </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalNewItem;