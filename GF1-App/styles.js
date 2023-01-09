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
    },
  },
  topBar: {
    container: {
      alignItems: 'center',
      backgroundColor: COLORS.backgroundColor,
      borderBottomWidth: 1,
      borderColor: 'gray',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      paddingVertical:6,
    },
    accountButton:{
      height: 50,
      width: 50,
    },
    accountImage:{
      height: 50,
      width: 50,
    },
    homeImage:{
      height: 50,
      width: 50,
    },
    settingsButton: {
      height: 48,
      width: 48,
    },
    settingsImage:{
      height: 50,
      width: 50,
    },
  }
})