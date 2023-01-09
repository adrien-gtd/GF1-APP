import { View, Text, StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';


const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Account page placeholder</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Account;