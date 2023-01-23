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
    },
    name: {
      width: '60%',
      height: 20,
    },
    quantity: {
      width: '10%',
      height: 20,
    },
    price: {
      width: '10%',
      height: 20,
    },
    remove: {
      weidth: '20%',
      height: 20,
    }

  }
  
})