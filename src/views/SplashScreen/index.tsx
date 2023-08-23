import {Image, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{width: width / 2}}
        source={require('../../assets/images/happy.png')}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
});
