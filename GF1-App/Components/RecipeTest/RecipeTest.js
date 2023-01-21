RecipeTest
import { validatePathConfig } from '@react-navigation/native';
import React, { useState } from 'react';
import {FlatList, View, StatusBar, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../styles';
import SvgComponent from './SvgComponent';
import Dropdown from '../Dropdown';

let countries=[{id : 1,name:'France'},{id:2,name:'Europe'},{id:3,name:'Afrique'},{id:4,name:'Amérique'},{id:5,name:'Asie'}];

const RecipeTest=({ navigation }) => {
    const [selectedItem,setSelectedItem]=useState(null);
    const onSelect=(item)=>{
        setSelectedItem(item);

    }
    return (
        
            <><ScrollView>
            <Text> Recette Test</Text>
            <SvgComponent/>
            <Text style={styles.bold}>Titre de la Recette</Text>
            
            <Text>1)</Text>
            <Text>2)</Text>
            <Text>Ah ! non ! c’est un peu court, jeune homme !</Text>

            <Text>On pouvait dire, oh bien des choses en somme!
            </Text>
            
            <Text>Provenance des ingrédients</Text>
            <Dropdown 
            data={countries}
            value={selectedItem}
            onSelect={onSelect}
            />
            


            </ScrollView>
            
        </>
            
            
        
    )
}


export default RecipeTest;