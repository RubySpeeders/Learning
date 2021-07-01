import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const BoxScreen = () => {
  return (
    <View style={styles.parentStyles}>
      <View style={styles.viewOneStyles} />
      <View style={styles.viewTwoStyles} />
      <View style={styles.viewThreeStyles} />
    </View>
  )
}
const styles = StyleSheet.create({
  parentStyles: {
    height: 200,
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  viewOneStyles: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  viewTwoStyles: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    top: 100
  },
  viewThreeStyles: {
    height: 100,
    width: 100,
    backgroundColor: 'purple'
  }
})
export default BoxScreen