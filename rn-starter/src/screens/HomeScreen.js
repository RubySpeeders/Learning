import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Home!
      </Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />
      <Button title="Go to Image Demo" onPress={() => navigation.navigate('Image')} />
      <Button title="Go to Colours Demo" onPress={() => navigation.navigate('Colours')} />
      <Button title="Go to Square Demo" onPress={() => navigation.navigate('Square')} />
      <Button title="Go to Box Demo" onPress={() => navigation.navigate('Box')} />
    </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;