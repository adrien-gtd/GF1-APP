import React, { useState } from 'react';
import {View, Button, Text, ScrollView } from 'react-native';
import styles from '../../styles';




const AddToList= ()=>{
    const [isAdded, setIsAdded] = useState(false);
    return (
        <><><View >
        <Text style={styles.recipe.bold}>Titre de la recette</Text>
    </View><Button
            color='rgba(100,200,100,1)'
            onPress={() => {
                isAdded? setIsAdded(false):setIsAdded(true);
            } }
            title={isAdded? 'Annuler':'Ajouter à la liste'} /></>
        </>
    );
}

export default AddToList;