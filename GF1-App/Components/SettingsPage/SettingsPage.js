import { View, Text, ScrollView, StatusBar} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles';
import Dropdown from '../Dropdown';
import { COLORS } from '../../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';


let themeChoices=[{id:1,name:'Bright'},{id:2,name:'Dark'}]

const SettingsPage = ({}) => {
  return (
    <View style={styles.settings.container}>
      <ScrollView>
        <View style={styles.settings.subcontainer}>
          <Text style={styles.settings.title}>Thème de l'application</Text>
          <Dropdown 
            choices={themeChoices}
            storeKey={'theme'}
            title='Sélectionner...'/>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default SettingsPage;
