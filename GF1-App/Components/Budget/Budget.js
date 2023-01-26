import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';
import BottomBar from '../BottomBar';
import TopBar from '../TopBar';
import History from './History';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import FlashMessage, { showMessage } from "react-native-flash-message";
import { COLORS } from '../../colors';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Budget = ({ navigation }) => {
  return (
    <View style={styles.Budget.container}>
      <Text style={styles.Budget.graph_title}>Financial budget graph</Text>
      <View style={styles.Budget.graphContainer}>
        <LineChart
          data={{
            labels: ["1","4","5","10","15","17","19"],
            datasets: [{data: [30,65,80,100,130,145,190]}]
          }}
          width={windowWidth-30
          } 
      height={220}
      yAxisLabel="$"
      yAxisInterval={1.5} 
      fromZero={true}
      chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    
              />
      </View>
      <Text style={styles.Budget.graph_title}>Carbon footprint graph</Text>
      <View style={styles.Budget.graphContainer} >
        <LineChart
          data={{
            labels: ["1","4","5","10","15","17","19"],
            datasets: [{data: [30,65,80,110,134,145,200]}]
          }}
          width={windowWidth-30
          } 
      height={200}
      yAxisSuffix=" CO2e/kg"
      yAxisInterval={1.5} 
      yLabelsOffset={5}
      fromZero={true}
      chartConfig={{
      backgroundColor: "#0a8a0a",
      backgroundGradientFrom: "#0a8a0a",
      backgroundGradientTo: "#0ca120",
      propsForHorizontalLabels: {fontSize:"10"},
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#0a8a0a",
      }
    }}
    
              />
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
