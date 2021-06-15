import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [{ name: 'Friend 1', age: 27 }, { name: 'Friend 2', age: 28 }, { name: 'Friend 3', age: 29 }, { name: 'Friend 4', age: 30 }, { name: 'Friend 5', age: 31 },]
  return (
    <FlatList data={friends} renderItem={({ item }) => {
      return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
    }} keyExtractor={(friend) => friend.name} />
  )
}

const styles = StyleSheet.create(
  {
    textStyle: {
      marginVertical: 50
    }
  }
)

export default ListScreen