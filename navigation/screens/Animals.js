import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, Image } from 'react-native';
import { animals } from '../../data/data';
import { AnimalCard } from '../../theme/AppStyles'

export default class Animals extends React.Component {

  onPressCategory = item => {
    // navigate to each animal profile screen
    const { navigation } = this.props;
    const title = item.name;
    const category = item;
    navigation.navigate('Profile');
  };

  renderAnimals = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressCategory(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.image_url }} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={animals}
          renderItem={this.renderAnimals}
          keyExtractor={item => `${item.animalId}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: AnimalCard.container,
  photo: AnimalCard.photo,
  title: AnimalCard.title,
  category: AnimalCard.category,
});
