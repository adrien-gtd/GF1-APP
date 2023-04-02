import { TextInput, Input, View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';
import React  from 'react';
import { useState, useEffect } from 'react';
import styles from '../../styles';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../colors';

import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Budget = ({ navigation }) => {

  const [maxBudget, setText1] = useState('');
  const [maxCarbon, setText2] = useState('');
  const [globalTheme,setGlobalTheme]=useState(null);

  useEffect(() => {
    AsyncStorage.getItem("budg")
    .then((value)=>{
     setText1(value);
  }),
    AsyncStorage.getItem("carb")
    .then((value)=>{
      setText2(value);
    })
    });
  
  useFocusEffect(()=>{
    console.log('arrivée sur homepage');
    AsyncStorage.getItem('theme')
    .then((value)=>{
      if(value=='dark'){
        setGlobalTheme(COLORS.darkThemeColor);
        console.log(value);
      }
      else{
        setGlobalTheme(COLORS.brightThemeColor);
      }
    })
    console.log('fin de useEffect');
  })



  return (
    <ScrollView contentcontainerstyle={styles.Budget.container}>
      <Text style={styles.Budget.graph_title}> {"Financial budget graph, cap: " + maxBudget + "$"}</Text>
      <View style={styles.Budget.graphContainer}>
        <LineChart 
          data={{
            labels: ["1","4","5","10","15","17","19"],
            datasets: [ 
              {
                label: 'Dataset 1',
                data: [30,65,80,100,130,145,190],
                
              },
              {
                data: [maxBudget,maxBudget,maxBudget,maxBudget,maxBudget,maxBudget,maxBudget],
                color: (opacity = 1) => `rgba(130, 0, 0, ${100})`,

              }
            ]
          }}
          width={windowWidth-30} 
          height={220}
          yAxisLabel="$"
          yAxisInterval={1.5} 
          title="Hello"
          withDots={false}
          fromZero={true}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            color: (opacity = 1) => `rgba(28, 12, 7, ${opacity})`,
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
        <TextInput
          ref={input => { this.textInput = input }} 
          style={{textAlign: 'center'}}
          maxLength= {4}
          placeholder="Edit budget cap"
          inputMode='numeric'
          keyboardType='numeric'
          onChangeText= {newText => {setText1(newText), AsyncStorage.setItem("budg",newText), this.textInput.clear()}}
          onSubmitEditing={() => this.textInput.clear()}
        />
      </View>
      
      <Text style={styles.Budget.graph_title}>{"Carbon footprint graph, cap: " + maxCarbon + " CO2e/kg"}</Text>
      <View style={styles.Budget.graphContainer} >
        <LineChart
          data={{
            labels: ["1","4","5","10","15","17","19"],
            datasets: [
              {
                data: [30,65,80,110,134,145,200],
                
              },
              {
                data: [maxCarbon,maxCarbon,maxCarbon,maxCarbon,maxCarbon,maxCarbon,maxCarbon],
                color: (opacity = 1) => `rgba(130, 0, 0, ${100})`,

              }
            ]
          }}
          width={ windowWidth-30 } 
          height={200}
          yAxisSuffix=" CO2e/kg"
          yAxisInterval={1.5} 
          withDots={false}
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
            style: { borderRadius: 16 },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#0a8a0a",
            }
          }}
        />
        <TextInput 
          ref={input => { this.textInput = input }} 
          style={{textAlign: 'center'}}
          maxLength= {8}
          placeholder="Edit carbon cap"
          keyboardType='numeric'
          onChangeText= {newText => {setText2(newText), AsyncStorage.setItem("carb",newText), this.textInput.clear()}}
          onSubmitEditing={() => this.textInput.clear()}
        />
      </View>
      <View style={styles.Budget.button}>
        <Button
          title="History"
          color='green'
          onPress={() => navigation.navigate("history")} 
        />
      </View>
    </ScrollView>
  )
}



export default Budget;
