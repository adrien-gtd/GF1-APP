import { View } from 'react-native';
import React from 'react';
import styles from '../../styles';



const History = ({ navigation }) => {
    return (<View style= {styles.History.container}>
      <View style={styles.History.topthird} />
      <View style={styles.History.middlethird} />
      <View style={styles.History.bottomthird} />
    </View>)
}

export default History;