    import React, { useState } from 'react';
    import { View, TextInput, TouchableOpacity, FlatList, Text, RecyclerViewBackedScrollViewComponent } from 'react-native';
    import styles from '../../styles';

    const SearchBar = ({onOutput}) => {
    const [searchText, setSearchText] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [data, setData] = useState([]);

    const handleSuggestionPress = (suggestion) => {
        setShowSuggestions(false)
        setSearchText(suggestion.ingredient_name)
        onOutput(suggestion.ingredient_name)
    };

    const updateSuggestion = async (text) => {
        try {
        console.log('http://137.194.210.185/ingredientBegining/' + text)
            const response = await fetch('http://137.194.210.185/ingredientBegining/' + text);
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleSearchText = async (text) => {
        try {
            setSearchText(text);
            await updateSuggestion(text);
            onOutput('');
            const result = data.find(
                (obj) => obj.ingredient_name.toLowerCase() === text.toLowerCase()
            );
        if (result !== undefined) {
            onOutput(result.ingredient_name);
        }
        } catch (error) {
            console.error(error);
        }
    };
    

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
                data={data.filter((suggestion) =>
                    suggestion.ingredient_name.toLowerCase().includes(searchText.toLowerCase())
                )}
                keyExtractor={(item) => item.id.toString()}
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