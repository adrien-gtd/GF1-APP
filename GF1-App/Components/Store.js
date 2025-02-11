import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../colors';

// To store data
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

// To retrieve data
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
        return(value);
    }
  } catch (error) {
    console.log(error);
  }
};

// To delete data
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};


