import { View, Text, StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from '../../styles';

const ShoppingList = ({ navigation }) => {
  return (
    <View>
      <Text>Liste des courses</Text>
      <View style={styles.shoppingList.itemContainer}>
        <Text style={styles.shoppingList.name}>
          courgette
        </Text>
        <Text style={styles.shoppingList.quantity}>
          10€
        </Text>
        <Text style={styles.shoppingList.price}>
          20kg
        </Text>
        <Button title='remove' style={styles.shoppingList.remove}/>
      </View>


      <View style={styles.shoppingList.itemContainer}>
        <Text style={styles.shoppingList.name}>
          readnazdol
        </Text>
        <Text style={styles.shoppingList.quantity}>
          139€ 
        </Text>
        <Text style={styles.shoppingList.price}>
          18kg
        </Text>
        <Button title='remove' style={styles.shoppingList.remove}/>
      </View>
    </View>
  )
}

export default ShoppingList;