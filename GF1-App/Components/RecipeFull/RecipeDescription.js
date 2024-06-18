import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Modal, Button } from 'react-native'
import { COLORS } from '../../colors';
import { CONFIG } from '../../config';
import styles from '../../styles'

const RecipeDescription = ({ description, isModalVisible, setModalVisibility }) => {
  description = description.split(CONFIG.recipeDescriptionSeparator);

  return (
    <>
      <Modal 
        visible={isModalVisible} 
        onRequestClose={() => setModalVisibility(false)}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.recipeFull.recipeDescription.background}>
          <View style={styles.recipeFull.recipeDescription.modal}>
            <Text style={styles.recipeFull.recipeDescription.title}>Instructions</Text>
            <FlatList
              data={description}
              renderItem={({ item }) => (
                <View style={styles.recipeFull.recipeDescription.step.container}>
                  <View style={styles.recipeFull.recipeDescription.step.drawingContainer}>
                    <View style={styles.recipeFull.recipeDescription.step.circle} />
                    <View style={styles.recipeFull.recipeDescription.step.line} />
                  </View>
                  <Text style={styles.recipeFull.recipeDescription.step.text}>
                    {item}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default RecipeDescription;