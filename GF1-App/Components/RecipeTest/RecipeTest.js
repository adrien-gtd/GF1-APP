RecipeTest
import React from 'react';
import {FlatList, View, StatusBar, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../styles';
import SvgComponent from './SvgComponent';


let countries=[{id : 1,name:'France'},{id:2,name:'Europe'},{id:3,name:'Afrique'},{id:4,name:'Amérique'},{id:5,name:'Asie'}];
const Dropdwon=()=>{
    return(
        <View>
            <TouchableOpacity>
                <Text>Choisir une origine</Text>
                
            </TouchableOpacity>
        </View>
    )
}
const RecipeTest=({ navigation }) => {
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
            


            </ScrollView>
            
        </>
            
            
        
    )
}


export default RecipeTest;