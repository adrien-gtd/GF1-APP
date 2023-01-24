
import React, { useState } from 'react';
import {FlatList, View, StatusBar, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../colors';
import styles from '../styles';



const Dropdown=({data=[]
    ,value={},
    onSelect=  ()=>{}
})=>{
    console.log("selected value",value);
    const [showOption,setShowOption]=useState(false);
    const onSelectedItem= (val)=>{
        setShowOption(false);
        onSelect(val);
    }
    return(
        <View>
            <TouchableOpacity 
            style={styles.recipe.dropDown} 
            activeOpacity={0.8}
            onPress={()=> setShowOption(!showOption)}>
                <Text>{!!value? value.name: 'Choisir une provenance'}</Text>
                
            </TouchableOpacity>
            {showOption && (<View style={{backgroundColor:COLORS.dropwdownBackgroundColor,
        padding:5,
        marginBottom:10,
        paddingHorizontal:5,
        }}>
                {data.map((val,i)=>{
                return(
                <TouchableOpacity
                 key={String(i)}
                 onPress={()=>onSelectedItem(val)}
                 >
                <View style={styles.recipe.itemsDropdown}>
                        <Text>{val.name}</Text> 
                </View>
                        
                   </TouchableOpacity>
                )
            })}</View>)}
            
        </View>
    )
}

export default Dropdown;
