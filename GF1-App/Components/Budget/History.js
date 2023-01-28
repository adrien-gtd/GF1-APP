import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';
import BottomBar from '../BottomBar';
import TopBar from '../TopBar';
import { COLORS } from '../../colors';



const History = ({ navigation }) => {
    return (<View style= {styles.History.container}>
      <View style={styles.History.topthird} />
      <View style={styles.History.middlethird} />
      <View style={styles.History.bottomthird} />



    </View>)
}

export default History;