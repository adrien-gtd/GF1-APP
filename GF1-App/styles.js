import { CurrentRenderContext } from '@react-navigation/native';
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
    suggestionText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 10,
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
      backgroundColor: COLORS.backgroundColorDarker,
      flexDirection: 'column',
      marginVertical:8,
      paddingVertical:4,
    },
    recipeInfo:{
      container:{
        alignItems: 'center',
        backgroundColor: COLORS.backgroundColorDarker,
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
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 8,
        },
        subcontainer:{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
        },
        item:{
          fontSize: 11,
          flex: 1,
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
    }
  },
})