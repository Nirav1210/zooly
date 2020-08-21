import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, Image } from 'react-native';
import { getAnimalsByCategoryId } from '../../data/api';
import { AnimalCard } from '../../theme/AppStyles'

export default class Animals extends React.Component {

  onPressAnimal = item => {
    const { navigation } = this.props;
    navigation.navigate('Profile', { item });
  };

  renderAnimals = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressAnimal(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.image_uri }} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { route, navigation } = this.props;
    const { category } = route.params;
    const filteredAnimals = getAnimalsByCategoryId(category.id);
    return (
      <View>
        <View>
            <Text>
                {category.description}
            </Text>
        </View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={filteredAnimals}
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
