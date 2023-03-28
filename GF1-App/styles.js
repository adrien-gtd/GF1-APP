import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

// Mettez ici vos style sheets. 
// Essayez de garder les chemins clairs pour pas qu'il y ait de confusion ou de conflits quand on merge.

export const setBackgroundColor=({style,newBackgroundColor})=>{
  style.backgroundColor=newBackgroundColor;
}

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
  Account:{
    profileIcon:{
      borderRadius: 150,
      height:90,
      width: 55,
      paddingTop: 45,
      padding:7,
      overflow: 'hidden',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: COLORS.brightThemeColorTopBar
    },
    AddToAsynStorageButton:{
      fontWeight: 'bold',
      fontSize: 15,
      padding: 4,

    },
    globalDark:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: COLORS.darkThemeColor,
      flex : 1,
    },
    globalBright:{
      align: 'center',
      backgroundColor: COLORS.brightThemeColor,
      flex: 1,
    }
    
  },
  homePage: {
    container: {
      backgroundColor: COLORS.darkThemeColor,
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
    brightContainer: {
      alignItems: 'center',
      backgroundColor: COLORS.brightThemeColorTopBar,
      borderBottomWidth: 1,
      borderColor: 'gray',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      paddingVertical:6,
    },
    darkContainer:{
      alignItems: 'center',
      backgroundColor: COLORS.darkThemeColorTopBar,
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
    brightContainer:{
      alignItems: 'center',
      backgroundColor: COLORS.brightThemeColorItem,
      flexDirection: 'column',
      marginVertical:8,
      paddingVertical:4,
    },
    darkContainer:{
      alignItems: 'center',
      backgroundColor: COLORS.darkThemeColorItem,
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
        backgroundColor: COLORS.brightThemeColorItem,
        borderColor: 'gray',
        borderLeftWidth: 1,
        flex: 1,
        flexDirection: 'column',
        marginRight:8,
        padding: 4,
      },
      subcontainerDark:{
        alignItems: 'flex-start',
        backgroundColor: COLORS.darkThemeColorItem,
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
      backgroundColor: '#fb5303',
      width:250,
      padding: 5,
      paddingHorizontal:4,
      paddingBottom: 5,
      flex:0.5,
      borderRadius:10,
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
      width:200,
      padding:3,
      paddingHorizontal:4,
      flexDirection:'row',
      flex:0.5,
      borderRadius:10,
      borderWidth:1,
      borderColor:'rgba(10,10,10,0.8)',
      marginBottom:4,
      marginTop:4,
    },
    itemsDropdownSelected:{
      backgroundColor:"#5d8af2",
      width:230,
      padding:3,
      flex:1,
      borderRadius:10,
      borderWidth:2,
      borderColor:'rgba(10,10,10,0.8)',
      marginBottom:4,
      marginTop:4,
    },
  },
  AddToAsynStorageButton:{
    no:{
      backgroundColor: '#fb5303',
      width:250,
      padding: 5,
      paddingHorizontal:4,
      flex:0.5,
      borderRadius:10,
      marginVertical:4,
      marginTop:10,
      minHeight:30,
      justifyContent:'center',
      flexDirection:'row',
      marginBottom:0,
      borderWidth:2,
    },
    yes:{
      backgroundColor: '#28f40f',
      width:250,
      padding: 5,
      paddingHorizontal:4,
      flex:0.5,
      borderRadius:10,
      marginVertical:4,
      marginTop:10,
      minHeight:30,
      justifyContent:'center',
      flexDirection:'row',
      marginBottom:0,
      borderWidth:2,
    }
    
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
})