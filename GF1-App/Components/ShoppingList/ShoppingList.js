import { View, Text, StyleSheet, Button, FlatList} from 'react-native';
import styles from '../../styles';
import React, { useState } from 'react';

const DATA = [
  {id: 1, name: 'courgette', quantity: "10kg", price: '10€'},
  {id: 2, name: 'poivrons', quantity: "2kg", price: '12€'},
  {id: 3, name: 'tomate', quantity: "0.0001kg", price: '30€'},
];

const ShoppingList = ({ navigation }) => {
  const [data, setdata] = useState(DATA);
  
  return (
    <View style = {styles.shoppingList.itemContainer}>
      <FlatList
        data = {data}
        renderItem= {({item}) => (
          <View style = {styles.shoppingList.itemContainer}>
            <Text style = {styles.shoppingList.name}>{item.name}</Text>
            <Text style = {styles.shoppingList.quantity}>{item.quantity}</Text> 
            <Text style = {styles.shoppingList.price}>{item.price}</Text>
          </View>
        )}

      />
    </View>
  )
}

export default ShoppingList;