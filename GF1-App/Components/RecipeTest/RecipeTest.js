RecipeTest
import { validatePathConfig } from '@react-navigation/native';
import React, { useState } from 'react';
import {FlatList, View, StatusBar, Button, Text, ScrollView, } from 'react-native';
import styles from '../../styles';
import Dropdown from '../Dropdown';
import SvgLogoIcon from './SvgComponent';
import { COLORS } from '../colors';

let countries=[{id:1,name:'France'},{id:2,name:'Europe'},{id:3,name:'Afrique'},{id:4,name:'Amérique'},{id:5,name:'Asie'}];

const RecipeTest=({icon}) => {
    const [selectedItem,setSelectedItem]=useState(null);
    const onSelect=(item)=>{
        setSelectedItem(item);

    }
    const [selectedItem2,setSelectedItem2]=useState(null);
    const onSelect2=(item)=>{
        setSelectedItem2(item);

    class AddButton extends Component {
        state={isNotAdded:true};
            render(){
              return(
                
                <><View>
                  <Text>{this.props.name}</Text>
                </View>
                <Button
                    color='rgba(100,500,100,0.7)'
                    onPress={() => { if(this.state){
                      this.setState({ isNotAdded: false })}
                      else{
                        this.setState({isNotAdded:true})
                       } }}
                    
                    title={this.state.isNotAdded ? "Ajouter aux favoris" : "Ajouté"} /></>
              )
            }
          }
    }

    return (
        
            <>
            <SvgLogoIcon/>
            
            <ScrollView >
           <AddButton/>
            

            
            <View style={styles.home.container}>
                <Text style={styles.recipe.title}>Titre de la Recette</Text>
            <Text>Etapes de la Recette</Text>
            <Text style={styles.recipe.text}>1)Couper les Oignons</Text>
            <Text style={styles.recipe.text}>2)Faire revenir les pommes</Text>
            <Text style={styles.recipe.text} >Ah ! non ! c’est un peu court, jeune homme !</Text>

            <Text style={styles.recipe.text}>On pouvait dire, oh bien des choses en somme!</Text>
            </View>
            
            <Text style={styles.recipe.text}>Provenance des ingrédients</Text>
            
            <Text style={styles.recipe.text}>Ingrédient 1</Text>
            <Dropdown 
            data={countries}
            value={selectedItem}
            onSelect={onSelect}
            />
            <Text style={styles.recipe.text}>Ingrédient 2</Text>
            <Dropdown 
            data={countries}
            value={selectedItem2}
            onSelect={onSelect2}
            />
            </ScrollView>
            


            
            
            
        </>
            
            
        
    )
}


export default RecipeTest;