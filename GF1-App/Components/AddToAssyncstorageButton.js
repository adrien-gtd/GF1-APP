import React,{useEffect, useState} from 'react'
import {View, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

const AddToAsyncStorageButton= ({storeKey})=>{
    const [isAdded,setIsAdded]=useState('oui');
    let  key=storeKey;
    useEffect(()=>{
        AsyncStorage.getItem(key)
    .then((value)=>{
        if(value=='oui'){
            setIsAdded('oui');

        }
        else if(value=='non'){
            setIsAdded('non');
        }
        else if(value==null){
            setIsAdded('oui');
        }
    })
    })
    return (
        <><><View >
        <Text>{storeKey}</Text>    
        <TouchableOpacity
        style={isAdded=='oui' ? styles.AddToAsynStorageButton.yes : styles.AddToAsynStorageButton.no}
        activeOpacity={0.8}
        onPress={async()=>{
            AsyncStorage.getItem(storeKey).
            then((value)=>{
                if(value=='oui'){
                    setIsAdded('non');
                    AsyncStorage.setItem(key,'non');
                }
                else{
                    setIsAdded('oui');
                    AsyncStorage.setItem(key,'oui');
                    
                    
                }
                
                console.log(value);
            })
            ;
        }}>
            <Text>{isAdded}</Text>

        </TouchableOpacity>
    </View>
    
    </>
        </>
    );
}
export default AddToAsyncStorageButton;