import { View, Text, StyleSheet, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from '../../styles';

const ShoppingList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <Button
        title="testNav -> budget"
        onPress={() => navigation.navigate("budget")}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default ShoppingList;