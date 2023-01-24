import { View, TouchableHighlight, Image, Text, TextInput } from 'react-native'
import styles from '../styles'

import { COLORS } from '../colors'

const TopBar = ({ navigation }) => {
  return(
    <View style={styles.topBar.container}>
      <TouchableHighlight 
        style={styles.topBar.accountButton} 
        onPress={() => {navigation.navigate('account')}}
        underlayColor={COLORS.backgroundColorDarker}>
        
      </TouchableHighlight>
      
      <TouchableHighlight 
        style={styles.topBar.settingsButton}
        onPress={() => navigation.navigate('budget')}
        underlayColor={COLORS.backgroundColorDarker}>
        
      </TouchableHighlight>
    </View>
  );
}

export default TopBar;