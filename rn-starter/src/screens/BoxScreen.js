import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const BoxScreen = () => {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textOneStyles}>Child #1</Text>
      <Text style={styles.textTwoStyles}>Child #2</Text>
      <Text style={styles.textThreeStyles}>Child #3</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyles: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200
  },
  textOneStyles: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyles: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-end'
  },
  textThreeStyles: {
    borderWidth: 3,
    borderColor: 'red',
  }
})
export default BoxScreen