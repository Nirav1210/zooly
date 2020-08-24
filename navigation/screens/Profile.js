import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import { Audio } from 'expo-av';

import { HeaderHeight } from "../../data/utils";
import { getRandomFact } from "../../data/api";

const { width, height } = Dimensions.get('screen');

export default class Profile extends React.Component {

  componentDidMount() {
    Audio.setIsEnabledAsync(true);
    Audio.setAudioModeAsync({
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentLockedModeIOS: false,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
  }

  _onPlayPausePressed = async (audioUri) => {
    try {
      const { sound, status } = await Audio.Sound.createAsync(
        audioUri,
        { shouldPlay: true }
      );
    } catch (error) {
      // An error occurred!
    }
  };

  onPressImageIcon = item => {
    const { navigation } = this.props;
    navigation.navigate('Gallery', item);
  };

  renderTabs = item => {
    const { navigation } = this.props;
    return (
      <Block row style={[styles.tabs, styles.dividerBottom]}>
        <Button shadowless style={styles.tab} onPress={() => navigation.goBack()}>
          <Block row middle>
            <AntDesign name="back" size={23} color="black" style={styles.buttonIcon} />
            {/* <Text bold size={20} style={styles.tabTitle}>Back</Text> */}
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => {this._onPlayPausePressed(item.audio_uri)}}>
          <Block row middle>
            <AntDesign name="sound" size={23} color="black" style={styles.buttonIcon} />
            {/* <Text bold size={20} style={styles.tabTitle}>Play</Text> */}
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => this.onPressImageIcon(item)}>
          <Block row middle>
            <AntDesign name="picture" size={23} color="black" style={styles.buttonIcon} />
            {/* <Text bold size={20} style={styles.tabTitle}>Photos</Text> */}
          </Block>
        </Button>
      </Block>
    )
  }

  render() {
    const { route, navigation } = this.props;
    const { item } = route.params;
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={{uri: item.image_uri}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={30} style={{ paddingBottom: 15 }}>{item.name}</Text>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block>
              {this.renderTabs(item)}
            </Block>
            <Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline' }}>
              <Text bold size={20}>Do you know...?</Text>
            </Block>
            <Block style={{ paddingBottom: -HeaderHeight }}>
              <Block row space="between" style={{ flexWrap: 'wrap' }} >
                <Text size={18}>{ getRandomFact(item.animalId) }</Text>
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
    paddingVertical: theme.SIZES.BASE * 3,
    zIndex: 2
  },
  options: {
    // position: 'relative',
    padding: theme.SIZES.BASE,
    // marginHorizontal: theme.SIZES.BASE,
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
    marginBottom: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.27,
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
  },
  tabTitle: {
    lineHeight: 20,
    fontWeight: '600'
  },
  buttonIcon: {
    paddingRight: 5,
    lineHeight: 20,
  },
  dividerBottom: {
    borderBottomWidth: 0.3,
    borderBottomColor: theme.COLORS.MUTED,
    height: 70
  }
});
