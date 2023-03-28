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
  recipePreview:{
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
  recipeFull: {
    container:{
      height: '100%',
      flex: 1,
      alignItems: 'center',
      marginVertical: 16,
      paddingVertical: 4,
      backgroundColor: COLORS.backgroundColor,
    },
    title:{
      fontSize: 32,
      fontWeight:'bold',
      textAlign: 'left',
    },
    pricesIndicators:{
      container:{
        marginTop: 24,
        flexDirection: 'row',
      },
      subcontainer:{
        width: '45%',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: 'orange',
        borderWidth: 1,
        backgroundColor: COLORS.backgroundColorDarker,
      },
      image:{
        height:40,
        width:40,
      },
    },
    description:{
      textAlign: 'left',
      fontSize: 20,
    },
    image:{
      height: '30%',
      width: '100%',
      marginTop: 24,
    },
    subcontainer:{
      alignItems: 'flex-start',
      backgroundColor: COLORS.backgroundColorDarker,
      borderColor: 'gray',
      borderLeftWidth: 1,
      flexDirection: 'column',
      marginRight:8,
      padding: 4,
    },
    ingredientsList:{
      container:{
        width:"90%",
        flexDirection: 'column',
        marginHorizontal: 8,
        marginTop: 24,
        height: '100%',
        backgroundColor:COLORS.backgroundColorDarker,
        flex:1
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      ingredientsNamesContainer:{
        width:'60%',
        alignText: 'center',
        flexDirection: 'row',
        padding:2,
        borderRightWidth: 1,
      },
      bulletPoint:{
        fontSize: 24,
        marginRight:4,
      },
      ingredient_name:{
        fontSize: 24,
      },
      quantity:{
        marginLeft: 8,
        fontSize: 24,
      },
    },
  },
  servingIndicator: {
    container: {
      marginVertical: 8,
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    button: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 4,
      borderColor: COLORS.backgroundColorDarkest,
      height: 40,
      width: 40,
      fontSize: 28,
      textAlign: 'center',
      backgroundColor: COLORS.backgroundColorDarker,
    },
    indicator: {
      fontSize: 32,
      marginHorizontal: 20,
    },
  },  

  Budget: {
    graphContainer: {
      alignItems: 'center',
      paddingBottom: 35,
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
  shoppingList: {
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
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
});