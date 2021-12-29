import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit} />

    </View>
  )
}
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: '#dedede',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
})
export default SearchBar