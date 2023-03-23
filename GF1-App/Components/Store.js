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

export const checkTheme= async ()=>{
  try {
    const value = await AsyncStorage.getItem('theme');
    if (value !== null) {
      if(value=='dark'){
        console.log("dark reconnu");
        return(COLORS.darkThemeColor);
      }
      else{
        return(COLORS.brightThemeColor);
      }
    }
  }
   catch (error) {
    console.log(error);
  }
}
