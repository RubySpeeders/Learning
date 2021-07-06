import React from 'react';
import { Text, View, StyleSheet, Linking, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

const ReviewDetails = ({ item }) => {
  return (
    <View style={styles.reviewStyle}>
      <View style={{ flexDirection: 'row' }}>
        {item.user.image_url ? <Image source={{ uri: item.user.image_url }} style={styles.imageStyle} /> : null}
        <Text style={{ alignSelf: 'center' }} onPress={() => { Linking.openURL(item.user.profile_url) }}>{item.user.name} says...</Text>
      </View>
      <Text>"{item.text}"</Text>
      <Text>{item.rating} Stars</Text>
      {item.rating ? <StarRating
        disabled
        maxStars={5}
        rating={item.rating}
        selectedStar={() => { }}
        size={20}
        fullStarColor='yellow'
      /> : null}

    </View>
  )
}
const styles = StyleSheet.create({
  reviewStyle: {
    marginVertical: 5
  },
  imageStyle: {
    height: 50,
    width: 50,
    marginRight: 5,
    borderRadius: 50
  }
})
export default ReviewDetails