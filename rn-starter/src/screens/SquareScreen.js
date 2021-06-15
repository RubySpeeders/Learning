import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  // console.log(red)

  return (
    <View>
      <ColourCounter
        onIncrease={() => {
          console.log('hello here')
        }}
        onDecrease={() => setRed(red - 1)}
        colour="Red" />
      <ColourCounter
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
        colour="Blue" />
      <ColourCounter
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
        colour="Green" />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen