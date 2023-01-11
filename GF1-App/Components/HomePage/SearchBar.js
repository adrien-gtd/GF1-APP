import React from 'react';
import { TextInput } from 'react-native';

import styles from '../../styles';

const SearchBar = () => {

  const [text, onChangeText] = React.useState('');

  return (
    <TextInput
      style={styles.home.searchBar}
      onChangeText={onChangeText}
      placeholder={'\uD83D\uDD0E Search for your favorite recipe !'}
      placeholderText={{fontWeight: 'bold'}}
      value={text}
    />
  )
}

export default SearchBar;