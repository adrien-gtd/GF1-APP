import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../../styles';

const ServingIndicator = ({ value, updateValue }) => {

  const increaseValue = () => {
    updateValue(value + 1);
  };

  const decreaseValue = () => {
    if (value > 1) {
      updateValue(value - 1);
    }
  };

  return (
    <View style={styles.servingIndicator.container} >
      <TouchableOpacity onPress={decreaseValue}>
        <Text style={styles.servingIndicator.button} >-</Text>
      </TouchableOpacity>
      <Text style={styles.servingIndicator.indicator}>{value}</Text>
      <TouchableOpacity onPress={increaseValue}>
        <Text style={styles.servingIndicator.button} >+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServingIndicator;