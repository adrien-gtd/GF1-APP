import { View, Text, StyleSheet, Button, FlatList} from 'react-native';
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
  return (
    <View>
      <FlatList
        data = {data}
        keyExtractor = {(item) => item.id}
        renderItem= {({item}) => (
          <View style = {styles.shoppingList.itemContainer}>
            <Text style = {styles.shoppingList.name}>{item.name}</Text>
            <Text style = {styles.shoppingList.quantity}>{item.quantity}</Text> 
            <Text style = {styles.shoppingList.price}>{item.price} €</Text>
          </View>
        )}

      />
      
    <Text>Coût total estimé : {getTotal(data)}</Text>
  </View>
  )
}

export default ShoppingList;