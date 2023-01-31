import React, { useState } from 'react';
import {View, Button, Text, ScrollView } from 'react-native';
import styles from '../../styles';
import Dropdown from '../Dropdown';
import SvgLogoIcon from './SvgLogoIcon';
import AddToList from './AddToListButton';


let countries=[{id:1,name:'France'},{id:2,name:'Europe'},{id:3,name:'Afrique'},{id:4,name:'Amérique'},{id:5,name:'Asie'}];

const RecipeTest=({icon}) => {
  const [selectedItem,setSelectedItem]=useState(null);
  const onSelect=(item)=>{
    setSelectedItem(item);
  }
  const [selectedItem2,setSelectedItem2]=useState(null);
  const onSelect2=(item)=>{
    setSelectedItem2(item);
  }
  return (
    <View>
      <SvgLogoIcon/>
      <AddToList/>
      <ScrollView >
        <View >
          <Text>Etapes de la Recette</Text>
          <Text style={styles.recipeFull.text}>1)Couper les Oignons</Text>
          <Text style={styles.recipeFull.text}>2)Faire revenir les pommes</Text>
          <Text style={styles.recipeFull.text} >Ah ! non ! c’est un peu court, jeune homme !</Text>
          <Text style={styles.recipeFull.text}>On pouvait dire, oh bien des choses en somme!</Text>
        </View>
        <Text style={styles.recipeFull.text}>Provenance des ingrédients</Text>
        <Text style={styles.recipeFull.text}>Ingrédient 1</Text>
        <Dropdown 
          data={countries}
          value={selectedItem}
          onSelect={onSelect}
          />
        <Text style={styles.recipeFull.text}>Ingrédient 2</Text>
        <Dropdown 
          data={countries}
          value={selectedItem2}
          onSelect={onSelect2}
        />
      </ScrollView>        
    </View>
  )
}
export default RecipeTest;