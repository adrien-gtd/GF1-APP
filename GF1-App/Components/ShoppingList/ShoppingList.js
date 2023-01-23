import { View, Text, Button, FlatList, TouchableOpacity, TextInput, Modal} from 'react-native';
import styles from '../../styles';
import React, { useState } from 'react';

const DATA = [
  {id: 1, name: 'courgette', quantity: "10kg", price: 10},
  {id: 2, name: 'poivrons', quantity: "2kg", price: 12},
  {id: 3, name: 'tomate', quantity: "0.0001kg", price: 13},
];


function getTotal(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i].price;
  }
  return sum;
}

const ShoppingList = ({ navigation }) => {
  const [data, setdata] = useState(DATA);
  const [isRender, setisRender] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [inputText, setinputText] = useState();
  const [editItem, seteditItem] = useState();

  const handleEditItem = (editItem) => {
    const newData = data.map(item => {
      if (item.id == editItem) {
        item.name = inputText;
        return item; 
      }

      return item;
    })
    console.log(newData);
    setdata(newData);
    setisRender(!isRender);
  }

  const onPressSaveEdit = () => {
    handleEditItem(editItem);
    setisModalVisible(false);
  }

  const onPressItem = (item) => {
    setisModalVisible(true);
    setinputText(item.name);
    seteditItem(item.id);
  }

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity 
        style = {styles.shoppingList.itemContainer}
        onPress = {() => onPressItem(item)}
      >
        <Text style = {styles.shoppingList.name}>{item.name}</Text>
        <Text style = {styles.shoppingList.quantity}>{item.quantity}</Text> 
        <Text style = {styles.shoppingList.price}>{item.price} €</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList
        data = {data}
        keyExtractor = {(item) => item.id.toString()}
        renderItem= {renderItem}
        extraData = {isRender}
      />

      <Modal 
        animationType = 'fade'
        visible = {isModalVisible}
        onRequestClose = {() => setisModalVisible (false)} 
      >
        <View style = {styles.shoppingList.modalView}>
          <Text style = {styles.shoppingList.text}>Change item: </Text>
          <TextInput
           style = {styles.shoppingList.input}
           onChangeText = {(text) => setinputText(text)}
           defaultValue = {inputText}
           editable = {true}
           multiline = {false}
           maxLength = {200}
          /> 
          <TouchableOpacity
            onPress = {() => onPressSaveEdit()} 
            style = {styles.shoppingList.saveEdits}
          >
            <Text>Save</Text>

          </TouchableOpacity>
        </View>
      </Modal>
    
    <Text style = {styles.shoppingList.text}>Coût total estimé : {getTotal(data)}</Text>

  </View>
  )
}

export default ShoppingList;