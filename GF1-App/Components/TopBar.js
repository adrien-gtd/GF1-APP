import { View, TouchableHighlight, Image} from 'react-native'
import styles from '../styles'
import  {SettingsPage} from './SettingsPage/SettingsPage' ;
import { COLORS } from '../colors'
import {storeData,removeData,getData} from './Store';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgProfileComponent from './SVGProfileComponent';
import SvgLogoIcon from './RecipeTest/SvgLogoIcon'

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
  const SettingsPressed=()=>{
    navigation.navigate('settings');
    console.log(getData('diet'));
    console.log('test');
  }
  return(
    <View style={globalTheme}>
      <TouchableHighlight 
        style={styles.topBar.accountButton} 
        onPress={() => {navigation.navigate('account')}}
        underlayColor={COLORS.backgroundColorDarker}>
        <SvgProfileComponent/>  
        
      </TouchableHighlight>
      <SvgLogoIcon/>
      <TouchableHighlight 
        style={styles.topBar.settingsButton}
        onPress={SettingsPressed}
        underlayColor={COLORS.backgroundColorDarker}>
        <Image style={styles.topBar.homeImage} source={require('../assets/settings.png')} />
      </TouchableHighlight>
    </View>
  );
}

export default TopBar;