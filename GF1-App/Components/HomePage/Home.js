import React from 'react';
import { View, StatusBar, Button, Text } from 'react-native';
import { COLORS } from '../../colors';

import styles from '../../styles';

import TopBar from '../TopBar';


const Home = ({ navigation }) => {
  return (
    <View style={styles.home.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.backgroundColor}
        barStyle={'dark-content'}
        hidden={false} />
      <TopBar navigation={navigation} />
      <View>
        <Text>spacer</Text>
        <Text>spacer</Text>
        <Text>spacer</Text>
        <Text>spacer</Text>
      </View>
      <Button
        title="Go to Budget"
        onPress={() => navigation.navigate("budget")}
      />
      <Button
        title="Go to Shopping List"
        onPress={() => navigation.navigate("shopping")}
      />
    </View>
  )
}


export default Home;