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
  account:{
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
    addToAsynStorageButton:{
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
  recipePreview:{
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
      marginVertical: 8,
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
        borderRadius: 16,
        borderWidth: 2,
        overflow: 'hidden',
      },
      subcontainerEco:{
        width: '45%',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        borderRightWidth: 2,
        backgroundColor: COLORS.backgroundColorDarker,
        paddingVertical: 4,
      },
      subcontainerMoney:{
        width: '45%',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        backgroundColor: COLORS.backgroundColorDarker,
        paddingVertical: 4,
      },
      image:{
        height:40,
        width:40,
        borderBottomWidth: 1,
        borderTopWidth: 1,
      },
    },
    description:{
      textAlign: 'left',
      fontSize: 20,
    },
    image:{
      height: '20%',
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
        width:"95%",
        flexDirection: 'column',
        marginHorizontal: 8,
        marginTop: 12,
        height: '100%',
        backgroundColor:COLORS.backgroundColorDarker,
        flex:1,
        borderRadius: 16,
        overflow: 'hidden',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 8, 
      },
      ingredientsNamesContainer:{
        width:'60%',
        flexDirection: 'row',
        padding:2,
        borderRightWidth: 1,
      },
      bulletPoint:{
        fontSize: 18,
        marginRight:4,
      },
      ingredient_name:{
        fontSize: 18,
      },
      quantity:{
        marginLeft: 8,
        fontSize: 18,
      },
    },
    recipeButtons:{
      container:{
        marginTop:8,
        height: '10%',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 16,
        overflow: 'hidden',
      },
      addToShoppingListButton:{
        flex: 1/3,
        height: '100%',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
      },
      doneRecipeButton:{
        flex: 1/3,
        height: '100%',
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
      },
      descriptionButton:{
        flex: 1/3,
        height: '100%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image:{
        height: '80%',
        resizeMode: 'contain',
      },
    },
    recipeDescription:{
      background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
      },
      modal: {
        position: 'absolute',
        top: '2.5%',
        left: '2.5%',
        right: '2.5%',
        bottom: '2.5%',
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
      title:{
        fontSize: 32,
        fontWeight: 'bold',
        margin: 8,
        borderBottomWidth: 1,
        width: '100%',
        textAlign: 'center'

      },
      step:{
        container:{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginBottom: 8,
        },
        drawingContainer: {
          flexDirection: 'column',
          alignItems: 'center',
        },
        circle: {
          width: 24,
          height: 24,
          borderRadius: 1000,
          backgroundColor: 'gray',
          marginTop: 8,
        },
        line: {
          flex: 1,
          width: 4,
          backgroundColor: 'lightgray',
          marginHorizontal: 8,
        },
        text: {
          fontSize: 20,
          lineHeight: 28,
          marginVertical:5,
          marginHorizontal:12,
          width:'86%',
          textAlign: 'justify',
        },
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
  settings :{
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
      },
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
  },
});