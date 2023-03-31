import styles from '../../styles';
import {TouchableWithoutFeedback, View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';

const ModalEditItem = ({
    isModalVisibleEditItem, 
    setisModalVisibleEditItem,
    setinputText,
    dismissKeyboard,
    setdata,
    setisRender,
    saveData,
    isRender,
    editItem,
    data,
    inputText
}) => {  

    const handleEditItem = (editItem) => {
        const newData = data.map(item => {
          if (item.id === editItem) {
            price_per_unit = item.price / item.quantity;
            item.price = inputText * price_per_unit;
            item.quantity = inputText;
            return item; 
          }
    
          return item;
        })
        setdata(newData);
        setisRender(!isRender);
        saveData(newData);
    }

    const onPressSaveEdit = () => {
        handleEditItem(editItem);
        setisModalVisibleEditItem(false);
      }

    const deleteItem = () => {
        const newData = data.filter(item => item.id != editItem);
        setdata(newData);
        setisRender(!isRender);
        setisModalVisibleEditItem(false);
        saveData(newData);
    }
    
    return (
        <Modal  
            animationType = 'fade'
            visible = {isModalVisibleEditItem}
            onRequestClose = {() => setisModalVisibleEditItem (false)} 
        >
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style = {styles.shoppingList.modalView}>
                <Text style = {styles.shoppingList.text}>Change quantity: </Text>
                <TextInput
                style={styles.shoppingList.searchBar}
                defaultValue = {inputText}
                onChangeText = {(text) => setinputText(text)}
                editable = {true}
                keyboardType="numeric"
                multiline = {false}
                maxLength = {200}
                /> 
                <View style = {styles.shoppingList.buttonContainer}>
                <TouchableOpacity
                    onPress = {() => onPressSaveEdit()} 
                    style = {styles.shoppingList.button}
                >
                    <Text style = {styles.shoppingList.buttonText}>Save</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => deleteItem()} 
                    style = {styles.shoppingList.button}
                >
                    <Text  style = {styles.shoppingList.buttonText}>Delete</Text>

                </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}


export default ModalEditItem;

