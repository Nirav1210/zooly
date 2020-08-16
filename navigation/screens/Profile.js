import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 

import { Icon } from '../../components';
import { animals } from '../../data/data';
import materialTheme from '../../theme/theme';
import { HeaderHeight } from "../../data/utils";

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class Profile extends React.Component {

  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={[styles.tabs, styles.dividerBottom]}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.goBack()}>
          <Block row middle>
            <AntDesign name="back" size={20} color="black" style={{ paddingRight: 8 }} />
            <Text size={14} style={styles.tabTitle}>Back</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.goBack()}>
          <Block row middle>
            <AntDesign name="sound" size={20} color="black" style={{ paddingRight: 8 }} />
            <Text size={14} style={styles.tabTitle}>Play</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={{uri: animals[0].image_url}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={25} style={{ paddingBottom: 8 }}>{animals[0].name}</Text>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block>
              {this.renderTabs()}
            </Block>
            <Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline' }}>
              <Text bold size={20}>Do you know...?</Text>
            </Block>
            <Block style={{ paddingBottom: -HeaderHeight }}>
              <Block row space="between" style={{ flexWrap: 'wrap' }} >
                <Text size={16}>{animals[0].description}</Text>
              </Block>
            </Block>
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 1.7,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  options: {
    // position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    // marginTop: -theme.SIZES.BASE,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
  tabs: {
    marginBottom: 24,
    marginTop: 5,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.37,
    borderRadius: 0,
    borderWidth: 0,
    height: 20,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  dividerBottom: {
    borderBottomWidth: 0.3,
    borderBottomColor: theme.COLORS.MUTED,
    height: 45
  }
});
