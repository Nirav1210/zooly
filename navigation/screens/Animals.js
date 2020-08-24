import React from 'react';
import { StyleSheet, FlatList, View, TouchableHighlight, Image } from 'react-native';
import { Block, Text } from 'galio-framework';
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
          <Block>
            <Block row space="between" style={styles.description} >
              <Text size={18}>{category.description}</Text>
            </Block>
          </Block>
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
  description: {
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    borderColor: '#444444',
  },
});
