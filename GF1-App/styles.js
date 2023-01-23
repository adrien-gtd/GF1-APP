import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// Mettez ici vos style sheets. 
// Essayez de garder les chemins clairs pour pas qu'il y ait de confusion ou de conflits quand on merge.


export default StyleSheet.create({
  home: {
    container: {
      backgroundColor: COLORS.backgroundColor,
      flex: 1,
      marginTop: 10,
    },
  },
  topBar: {
    container: {
      alignItems: 'center',
      backgroundColor: 'blue',
      justifyContent: 'center',
      paddingHorizontal: 8,
      height: 100,
    },
  },

  shoppingList: {
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space arround', 
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
    },
    name: {
      marginVertical: 20,
      fontSize: 15,
      fontWeigth: 'bold', 
      width: '60%',
    },
    quantity: {
      marginVertical: 20,
      fontSize: 15,
      fontWeigth: 'bold', 
      width: '20%',
    },
    price: {
      marginVertical: 20,
      fontSize: 15,
      fontWeigth: 'bold', 
      width: '20%',
    },
    remove: {
      weidth: '20%',
      height: 20,
    },
    input: {
      width: '90%',
      height: 70,
      borderColor: 'grey',
      borderWidth: 1,
      fontSize: 25
    },
    modalView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      marginVertical: 20,
      fontSize: 25,
      fontWeigth: 'bold'
    },
    saveEdits: {
      backgroundColor: 'grey',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginTop: 20
    }

  }
  
})