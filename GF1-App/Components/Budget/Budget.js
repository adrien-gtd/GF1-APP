import { View, Text, StyleSheet, Button, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';
import BottomBar from '../BottomBar';
import TopBar from '../TopBar';

//to Add bottomBar and better topbar. utiliser flex pour tailles graphes et alignement boutton


const Budget = ({ navigation }) => {
  return (
    <View>
      <TopBar navigation={navigation} />
      <Text style={styles.Budget.graph_title}>Financial budget graph. Money left:___</Text>
      <View style={styles.Budget.container}>
        <Image
          style={styles.Budget.resize}
          source={require("../../assets/money-graph.png")} width="10" height="10" />
      </View>
      <Text style={styles.Budget.graph_title}>Carbon footprint graph:</Text>
      <View style={styles.Budget.container}>
        <Image
          style={styles.Budget.resize}
          source={require("../../assets/carbon-graph.png")} />

      </View >
      <View style={styles.Budget.button}>
        <Button
          title="History"
          color='green'
          onPress={() => navigation.navigate("history")} />
      </View>
      




    </View>

  )
}



export default Budget;
