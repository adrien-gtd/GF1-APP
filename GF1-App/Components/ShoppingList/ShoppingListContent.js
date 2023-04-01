import styles from '../../styles';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import { COLORS } from '../../colors';

const ShoppingListContent = ({
    data,
    isRender,
    setisModalVisibleNewItem,
    setisModalVisibleEditItem,
    setinputText,
    seteditItem
}) => {

    const getTotal = (array) => {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
          sum = sum + parseFloat(array[i].price);
        }
        return sum;
    }

    const onPressItem = (item) => {
        setisModalVisibleEditItem(true);
        setinputText(item.quantity);
        seteditItem(item.id);
    }
    
    const renderItem = ({item}) => {
        return (
          <TouchableOpacity 
            style = {styles.shoppingList.itemContainer}
            onPress = {() => onPressItem(item)}
          >
            <Text style = {styles.shoppingList.name}>{item.name}</Text>
            <Text style = {styles.shoppingList.quantity}>{item.quantity} {item.quantityType}</Text> 
            <Text style = {styles.shoppingList.price}>{item.price} €</Text>
          </TouchableOpacity>
        )
    }

    return (
        <View style = {styles.shoppingList.page}>
            <Text style = {styles.shoppingList.title}>Coût total estimé : {getTotal(data)} € </Text>
            <View
                style = {styles.shoppingList.itemContainer}
            >
                <Text style = {styles.shoppingList.name}>Name</Text>
                <Text style = {styles.shoppingList.quantity}>Quantity</Text> 
                <Text style = {styles.shoppingList.price}>Price</Text>
            </View>
            <View style = {{flex:1, marginBottom: 75, backgroundColor: COLORS.backgroundColorDarkest}}>
                <FlatList
                data = {data}
                keyExtractor = {(item) => item.id.toString()}
                renderItem= {renderItem}
                extraData = {isRender}
                />
            </View>
            <View  style = {styles.shoppingList.buttonContainer}>
                <TouchableOpacity
                onPress = {() => setisModalVisibleNewItem(true)} 
                style = {styles.shoppingList.button}
                >
                <Text style = {styles.shoppingList.buttonText}>Add Item</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ShoppingListContent;