import React, { useState } from 'react'
import { View, TouchableHighlight, Image, Text, TextInput } from 'react-native'
import styles from '../styles'

const setText = () => {
  return;
}

const TopBar = ({ navigation }) => {
  
  const [text, setText] = useState('Initial state')

  return(
    <View style={styles.topBar.container}>
      <Text>TopBar</Text>
    </View>
  );
}

export default TopBar;