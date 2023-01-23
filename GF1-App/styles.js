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
      padding: 8,
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
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  dropDown:{
    backgroundColor: 'rgba(100,500,100,1)',
    padding: 3,
    borderRadius:10,
    minHeight:30,
    justifyContent:'center',
    flexDirection:'row',
    marginBottom:6,
    
  }
})