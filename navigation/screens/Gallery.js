import React from 'react';
import { StyleSheet, FlatList, View, TouchableHighlight, Image, Dimensions } from 'react-native';
import { AnimalCard } from '../../theme/AppStyles';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

// default number of columns
const numColums = 2;

// item size
const ITEM_HEIGHT = 200;
const ITEM_MARGIN = 15;

export default class Gallery extends React.Component {

  onPressAnimal = item => {
    const { navigation } = this.props;
    // navigation.navigate('Profile', { item });
  };

  renderAnimals = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressAnimal(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item }} />
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { route, navigation } = this.props;
    const item = route.params;
    const filteredAnimals = item.other_images;
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={filteredAnimals}
          renderItem={this.renderAnimals}
          keyExtractor={(item, index) => item[index]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: ITEM_MARGIN,
    marginTop: 15,
    width: (SCREEN_WIDTH - (numColums + 1) * ITEM_MARGIN) / numColums,
    height: ITEM_HEIGHT,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (numColums + 1) * ITEM_MARGIN) / numColums,
    height: ITEM_HEIGHT,
    borderRadius: 15,
  },
});