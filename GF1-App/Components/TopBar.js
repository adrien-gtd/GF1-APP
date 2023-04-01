import { View, TouchableHighlight, Image} from 'react-native'
import styles from '../styles'
import  SettingsPage from './SettingsPage/SettingsPage' ;

import { COLORS } from '../colors'
import {storeData,removeData,getData} from './Store';
import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgProfileComponent from './SVGProfileComponent';

const TopBar = ({ navigation }) => {
  const [globalTheme,setGlobalTheme]=useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('theme')
    .then((value)=>{
      if(value=='dark'){
        setGlobalTheme(styles.topBar.darkContainer);
        
      }
      else{
        setGlobalTheme(styles.topBar.brightContainer);
      }
    })
  })
  return(
    <View style={globalTheme}>
      <TouchableHighlight 
        style={styles.topBar.accountButton} 
        onPress={() => {navigation.navigate('Account')}}
        underlayColor={COLORS.backgroundColorDarker}>
        <SvgProfileComponent/>
      </TouchableHighlight>
      <Image style={styles.topBar.homeImage} source={require('../assets/logoHalf.png')} />
      <TouchableHighlight 
        style={styles.topBar.settingsButton}
        onPress={() => {navigation.navigate('Settings')}}
        underlayColor={COLORS.backgroundColorDarker}>
        <Image style={styles.topBar.homeImage} source={require('../assets/settings.png')} />
      </TouchableHighlight>
    </View>
  );
}

export default TopBar;