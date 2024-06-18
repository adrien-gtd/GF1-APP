    import React, { useState } from 'react';
    import { Alert, View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
    import { CONFIG } from '../../config';
    import styles from '../../styles';

    const timeout = 5000

    const SearchBar = ({onOutput, creatAlert}) => {
    const [searchText, setSearchText] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [data, setData] = useState([]);

    const handleSuggestionPress = (suggestion) => {
        setShowSuggestions(false)
        setSearchText(suggestion.ingredient_name)
        console.log(suggestion)
        onOutput(suggestion)
    };



    const updateSuggestion = async (text) => {
        try {
            if (text !== '') {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeout);
                console.log('http://'+ CONFIG.serverIp + '/ingredientBegining/' + text)
                const response = await fetch('http://'+ CONFIG.serverIp + '/ingredientBegining/' + text);
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
            setSearchText(text);
            await updateSuggestion(text);
            onOutput();
            const result = data.find(
                (obj) => obj.ingredient_name.toLowerCase() === text.toLowerCase()
            );
            if (result !== undefined) {
                onOutput(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const filterData = (toFilter) => {
        if (Object.keys(toFilter).length !== 0) {
            return toFilter.filter((suggestion) =>
                suggestion.ingredient_name.toLowerCase().includes(searchText.toLowerCase())
            )
        }
        return {}
    } 
    

    return (
        <View style={styles.shoppingList.searchBarContainer}>
            <TextInput
                style={styles.shoppingList.searchBar}
                placeholder="Search"
                value={searchText}
                onChangeText={handleSearchText}
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
                <FlatList
                style = {{width: "80%"}}
                contentContainerStyle = {{}}
                data={filterData(data)}
                keyExtractor={(item) => item.ingredient_id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    style={styles.shoppingList.searchBarSuggestion} 
                    onPress={() => handleSuggestionPress(item)}>
                        <Text>{item.ingredient_name}</Text>
                    </TouchableOpacity>
                )}
                />
            )}
        </View>
    );
    };

    export default SearchBar;