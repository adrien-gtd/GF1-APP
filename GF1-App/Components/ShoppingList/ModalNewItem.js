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


    const createAlert = (title, message) => {
      Alert.alert(title, message, [
        {
          text: 'Ok',
          style: 'cancel',
        }]
      );
    }

    const alreadyExist = (result) => {
      const newData = [...data];
      newData[result].quantity = parseInt(newData[result].quantity) + parseInt(parseInt(newQuantity));
      newData[result].price = (parseFloat(newData[result].price) + parseFloat(newItem.price_per_unit * newQuantity)).toFixed(2);
      return newData;
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
          createAlert("Erreur", "Ingrédient non valide.");
          console.log("Ingrédient non valide !!");
        } else {
          createAlert("Erreur", "Quantité non valide.");
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
                <Text style = {styles.shoppingList.text}>Ajouter un ingrédient</Text>
                <Text style = {styles.shoppingList.text}>Nom de l'ingrédient: </Text>
                <SearchBar 
                  onOutput = {handleOutPut}
                  createAlert = {createAlert}
                />
                <Text style = {styles.shoppingList.text}>Quantité: </Text>
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
                    <Text style = {styles.shoppingList.buttonText}>Ajouter un ingrédient</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => {setisModalVisibleNewItem(false); setNewQuantity();setNewItem() }} 
                    style = {styles.shoppingList.button}
                >
                    <Text style = {styles.shoppingList.buttonText}>Quitter</Text>

                </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalNewItem;