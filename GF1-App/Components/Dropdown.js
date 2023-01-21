
import React, { useState } from 'react';
import {FlatList, View, StatusBar, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';



const Dropdown=({data=[]
    ,value={},
    onSelect=  ()=>{}
})=>{
    console.log("selected value",value);
    const [showOption,setShowOption]=useState(false);
    return(
        <View>
            <TouchableOpacity 
            style={styles.dropDown} 
            activeOpacity={0.8}
            onPress={()=> setShowOption(!showOption)}>
                <Text>{!!value? value.name: 'Choisir une provenance'}</Text>
                
            </TouchableOpacity>
            {showOption && (<View>
                {data.map((val,i)=>{
                return(<Text key={String(i)}>{val.name}</Text>)
            })}</View>)}
            
        </View>
    )
}

export default Dropdown;
