import React, { useState } from 'react';
import { Alert, View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { CONFIG } from '../../config';
import styles from '../../styles';

const timeout = 1000

const SearchBar = ({onOutput}) => {

  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [data, setData] = useState([]);

  const handleSuggestionPress = (suggestion) => {
      setShowSuggestions(false)
      setSearchText(suggestion.recipe_name)
      onOutput(suggestion.recipe_id)
  };

  const creatAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: 'Ok',
        style: 'cancel',
      }]
    );
  }

  const updateSuggestion = async (text) => {
    try {
        if (text !== '') {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);
            const response = await fetch('http://'+ CONFIG.serverIp + '/recipeBegining/' + text);
            clearTimeout(timeoutId);
            const jsonData = await response.json();
            setData(jsonData);
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            creatAlert("Connection erreur", "Timeout: impossible de joindre le serveur en un temps convenable")
            throw new Error('Request timed out');
        } else {
            creatAlert("Connection erreur", "Aucune connection au serveur")
            console.error(error);
        }
    }
  };

  const handleSearchText = async (text) => {
      try {
        if(text === '') {
          setShowSuggestions(false)
        } else {
          setShowSuggestions(true);
        }
        setSearchText(text);
        await updateSuggestion(text);
        onOutput();
        const result = data.find(
            (obj) => obj.recipe_name.toLowerCase() === text.toLowerCase()
        );
        if (result !== undefined) {
            onOutput(result.recipe_id);
        }
      } catch (error) {
          console.error(error);
      }
  };

  const filterData = (toFilter) => {
    if (Object.keys(toFilter).length !== 0) {
        return toFilter.filter((suggestion) =>
            suggestion.recipe_name.toLowerCase().includes(searchText.toLowerCase())
        )
    }
    return {}
  } 


  return (
      <View>
          <TextInput
              value={searchText}
              onChangeText={handleSearchText}
              onFocus={() => setShowSuggestions(true)}
              style={styles.homePage.searchBar}
              placeholder={'\uD83D\uDD0E Search for your favorite recipe !'}
              placeholderText={{fontWeight: 'bold'}}
          />
          {showSuggestions && (
              <FlatList
              contentContainerStyle = {{}}
              data={filterData(data)}
              keyExtractor={(item) => item.recipe_id.toString()}
              renderItem={({ item }) => (
                  <TouchableOpacity 
                  style={styles.homePage.searchBarSuggestion} 
                  onPress={() => handleSuggestionPress(item)}>
                      <Text>{item.recipe_name}</Text>
                  </TouchableOpacity>
              )}
              />
          )}
      </View>
  );
};

export default SearchBar;
