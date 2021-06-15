import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Sarah'
  return (
    <View>
      <Text style={styles.textStyle}>
        Getting started with React Native!
      </Text>
      <Text style={styles.subHeaderStyles}>
        My name is {name}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyles: {
    fontSize: 20
  }
})

export default ComponentsScreen;