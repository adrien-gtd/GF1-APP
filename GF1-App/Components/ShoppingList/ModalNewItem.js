import styles from '../../styles';
import {TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
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

    function getNewId(arr) {
        let id = 1;
        while (arr.some(obj => obj.id === id)) {
          id++;
        }
        return id;
    }

    const addItem = () => {
        if (newItem !== '') {
          const newData = [
            ...data,
            {
              id: getNewId(data),
              name: newItem,
              quantity: newQuantity,
              quantityType: "kg",
              price: 1,
            },
          ];
          setdata(newData);
          setisRender(!isRender);
          setNewItem('');
          setNewQuantity('');
          saveData(newData);
          setisModalVisibleNewItem(false)
        }
        else {
          console.log("Ingrédient non valide !!")
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
                <SearchBar onOutput = {handleOutPut}/>
                <Text style = {styles.shoppingList.text}>Quantity: </Text>
                <TextInput
                style={styles.shoppingList.searchBar}
                defaultValue = {newQuantity}
                onChangeText = {(text) => setNewQuantity(text)}
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
                    onPress = {() => {setisModalVisibleNewItem(false); setNewQuantity('');setNewItem('') }} 
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