import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Linking } from 'react-native';
import yelp from '../api/yelp'
import ReviewDetails from '../components/ReviewDetails';

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null)
  const [reviews, setReviews] = useState([])
  const id = navigation.getParam('id')
  const getRestaurant = async (id) => {
    try {
      const response = await yelp.get(`/${id}`)
      setRestaurant(response.data)
    } catch (err) {
      console.log('restaurant', err)
    }
  }
  const getReviews = async (id) => {
    try {

      const response = await yelp.get(`/${id}/reviews`);
      setReviews(response.data.reviews)
    } catch (err) {
      console.log('review', err)
    }
  }
  useEffect(() => { getRestaurant(id) }, [])
  useEffect(() => { getReviews(id) }, [])

  if (!restaurant || !reviews) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle} onPress={() => { Linking.openURL(`${restaurant.url}`) }}>{restaurant.name}</Text>
      <FlatList
        data={restaurant.location.display_address}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>
        }} />
      <Text>{restaurant.display_phone}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.imageStyle} />
        }} />
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ReviewDetails item={item} />
          )
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
export default RestaurantShowScreen