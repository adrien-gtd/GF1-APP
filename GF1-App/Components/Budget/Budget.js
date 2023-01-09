import { View, Text, StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';


const Budget = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <Button
        title="testNav -> shopping"
        onPress={() => navigation.navigate("shopping")}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default Budget;