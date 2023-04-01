import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Modal, Button } from 'react-native'
import { COLORS } from '../../colors';
import { CONFIG } from '../../config';
import styles from '../../styles'

const RecipeDescription = ({ description, isModalVisible, setModalVisibility }) => {
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.|Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.|Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.|Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.|Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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