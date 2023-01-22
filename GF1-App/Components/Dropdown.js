
import React, { useState } from 'react';
import {FlatList, View, StatusBar, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
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
            style={styles.dropDown} 
            activeOpacity={0.8}
            onPress={()=> setShowOption(!showOption)}>
                <Text>{!!value? value.name: 'Choisir une provenance'}</Text>
                
            </TouchableOpacity>
            {showOption && (<View style={{backgroundColor:'rgba(100,400,100,0.5)',
        padding:4,
        marginBottom:5}}>
                {data.map((val,i)=>{
                return(
                <TouchableOpacity
                 key={String(i)}
                 onPress={()=>onSelectedItem(val)}
                 >
                    
                   <Text>{val.name}</Text> 
                   </TouchableOpacity>
                )
            })}</View>)}
            
        </View>
    )
}

export default Dropdown;
