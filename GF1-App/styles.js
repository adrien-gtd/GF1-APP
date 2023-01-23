import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
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
  Budget: {
    container: {
      paddingBottom: 10,
      paddingTop:5,
    },
    resize: {
      width: 300,
      height: 200,
    },
    graph_title: {
      alignItems: 'center',
      fontWeight: 'bold',
    },
    button: {
      alignItems: 'center',
  },
  }
})