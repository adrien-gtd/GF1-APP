import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// Mettez ici vos style sheets. 
// Essayez de garder les chemins clairs pour pas qu'il y ait de confusion ou de conflits quand on merge.



export default StyleSheet.create({
  
  tabNavigator: {
    budget:{
      height:30,
      width:30,
    },
    home:{
      height:30,
      width:30,
    },
    shopping:{
      height:30,
      width:30,
    },
  },
  homePage: {
    container: {
      backgroundColor: COLORS.backgroundColor,
      flex: 1,
    },
    suggestionText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 10,
    },
    searchBar: {
      backgroundColor: COLORS.backgroundColorDarker,
      borderRadius: 4,
      fontSize: 18,
      height: 48,
      margin: 8,
      padding: 8,
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
      height: 48,
      width: 48,
    },
    accountImage:{
      height: 48,
      width: 48,
    },
    homeImage:{
      height: 48,
      width: 48,
    },
    settingsButton: {
      height: 48,
      width: 48,
    },
    settingsImage:{
      height: 48,
      width: 48,
    },
  },
  recipe:{
    container:{
      alignItems: 'center',
      backgroundColor: COLORS.backgroundColor,
      flexDirection: 'column',
      marginVertical:8,
      paddingVertical:4,
    },
    recipeInfo:{
      container:{
        alignItems: 'center',
        flexDirection: 'row',
      },
      image:{
        height: 112,
        width: 112,
        margin: 8,
      },
      subcontainer:{
        alignItems: 'flex-start',
        backgroundColor: COLORS.backgroundColorDarker,
        borderColor: 'gray',
        borderLeftWidth: 1,
        flex: 1,
        flexDirection: 'column',
        marginRight:8,
        padding: 4,
      },
      title:{
        fontSize: 20,
        fontWeight:'bold',
        textAlign: 'left',
        flex:1,
      },
      description:{
        textAlign: 'left',
      },
      ingredientsList:{
        container:{
          flex:1,
          width:"100%",
          flexDirection: 'row',
          marginHorizontal: 8,
        },
        subcontainer:{
          width:'50%',
          alignText: 'center',
          flexDirection: 'row',
        },
        item:{
          fontSize: 11,
        },
      },
    },
    pricesIndicators:{
      container:{
        flexDirection: 'row',
      },
      subcontainer:{
        justifyContent: 'center',
        flex:1,
        flexDirection: 'row',
      },
      image:{
        height:24,
        width:24,
      },
    },
  },
  Budget: {
    graphContainer: {
      alignItems: 'center',
      paddingBottom: 50,
    },
    container: {
      backgroundColor: COLORS.backgroundColor,
      alignItems: 'center',
      paddingBottom: 10,
      paddingTop:30,
    },
    resize: {
      width: 300,
      height: 200,
    },
    graph_title: {
      fontSize: 15,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    button: {
      alignItems: 'center',
    },
  },
  History : {
    container: {
      flex: 1,
    },
    topthird: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: COLORS.backgroundColor,
    },
    middlethird: {
      flex: 2,
      flexDirection: 'row',
      backgroundColor: COLORS.backgroundColorDarker,
    },
    bottomthird: {
      flex: 3,
      flexDirection: 'row',
      backgroundColor: COLORS.backgroundColorDarkest,
    },
  },
  recipeFull: {
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
      flex:1
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
  },
  shoppingList: {
    page: {
      flex: 1, 
      width: '100%', 
      pointerEvents: 'box-none', 
      backgroundColor: COLORS.backgroundColor
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      borderBottomColor: COLORS.backgroundColorDarker,
      borderTopWidth: 1,
      borderTopColor: COLORS.backgroundColorDarker,
    },
    name: {
      marginVertical: 20,
      paddingHorizontal: 20,
      fontSize: 15,
      fontWeigth: 'bold', 
      width: '50%',
    },
    quantity: {
      marginVertical: 20,
      fontSize: 15,
      fontWeigth: 'bold', 
      width: '30%',
    },
    price: {
      marginVertical: 20,
      fontSize: 15,
      fontWeigth: 'bold', 
      width: '20%',
    },
    input: {
      width: '90%',
      height: 70,
      borderColor: COLORS.backgroundColorDarkest,
      borderWidth: 1,
      fontSize: 25
    },
    modalView: {
      flex: 1,
      backgroundColor: COLORS.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      marginVertical: 20,
      fontSize: 15,
      fontWeigth: 'bold'
    },
    title: {
      textAlign: 'center',
      color: 'green',
      marginVertical: 20,
      fontSize: 25,
      fontWeigth: 'bold'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    button: {
      backgroundColor: COLORS.buttonColor,
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginRight: 10,
    },
    buttonText: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    searchBarContainer: {
      width: '100%', 
      flexDirection: 'column',
      alignItems: 'center',
    },
    searchBar: {
      width: '80%',
      height: 50,
      backgroundColor: COLORS.backgroundColorDarker,
      borderRadius: 5,
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'row',
    },
    searchBarSuggestion: {
      height: 50,
      backgroundColor: COLORS.backgroundColorDarkest,
      justifyContent: 'center',
      paddingLeft: 10,
    },
  }
})