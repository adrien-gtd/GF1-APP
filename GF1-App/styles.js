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
      spacing: 4,
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
  recipe: {
    text:{
      fontWeight: 'bold',
      fontSize:10,
      marginVertical:5,
      flex:1,
      
      
    },
    title:{
      fontWeight: 'bold',
      fontSize:10,
      marginVertical:2,
      flex:1,
      

    },
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    
    dropDown:{
      backgroundColor: 'rgba(100,500,100,1)',
      padding: 3,
      flex:1,
      borderRadius:0,
      marginVertical:4,
      marginTop:10,
      minHeight:30,
      justifyContent:'center',
      flexDirection:'row',
      marginBottom:0,
      borderWidth:2,

      
    },
    itemsDropdown:{
      backgroundColor:COLORS.dropwdownItemsColor,
      padding:3,
      flex:1,
      borderRadius:10,
      borderWidth:1,
      borderColor:'rgba(10,10,10,0.8)',
      marginBottom:4,
      marginTop:4,

    },
    addButton:{
      backgroundColor:COLORS.dropwdownItemsColor,
      borderRadius:10,
      borderWidth:1,
      borderColor:'rgba(10,10,10,0.8)',
      marginBottom:4,
      marginTop:4,

    }
  }
})