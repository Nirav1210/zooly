import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, Image } from 'react-native';
import { categories } from '../../data/data';

export default class Home extends React.Component {

  onPressCategory = item => {
    const { navigation } = this.props;
    const category = item;
    navigation.navigate('Animals', { category });
  };

  renderCategory = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressCategory(item)}>
        <View style={styles.categoriesItemContainer}>
          <Image style={styles.categoriesPhoto} source={{ uri: item.photo_uri }} />
          <Text style={styles.categoriesName}>{item.name}</Text>
          <Text style={styles.categoriesInfo}>{3} animals</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  }
});
