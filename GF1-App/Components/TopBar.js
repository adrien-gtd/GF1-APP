import { View, TouchableHighlight, Image} from 'react-native'
import styles from '../styles'
import  {SettingsPage} from './SettingsPage/SettingsPage' ;
import { COLORS } from '../colors'
import {storeData,removeData,getData} from './Store';


const TopBar = ({ navigation }) => {
  const SettingsPressed=()=>{
    navigation.navigate('settings');
    console.log(getData('diet'));
    console.log('test');
  }
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
        onPress={SettingsPressed}
        underlayColor={COLORS.backgroundColorDarker}>
        <Image style={styles.topBar.homeImage} source={require('../assets/settings.png')} />
      </TouchableHighlight>
    </View>
  );
}

export default TopBar;