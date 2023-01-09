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
        <Image 
          style={styles.topBar.accountImage} 
          source={require('../assets/account.png')} />
      </TouchableHighlight>
      <Image style={styles.topBar.homeImage} source={require('../assets/logoHalf.png')} />
      <TouchableHighlight 
        style={styles.topBar.settingsButton}
        onPress={() => navigation.navigate('settings')}
        underlayColor={COLORS.backgroundColorDarker}>
        <Image 
          style={styles.topBar.settingsImage} 
          source={require('../assets/settings.png')} />
      </TouchableHighlight>
    </View>
  );
}

export default TopBar;