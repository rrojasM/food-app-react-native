import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import COLORS from '../utils/colors';

const BoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <View style={{ height: 400 }}>
        <Image style={{ width: "100%", resizeMode: 'contain', top: -150 }} source={require('../assets/onboardImage.png')} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>Delicius Food</Text>
          <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 17, color: COLORS.GREY }}>We help you to find best and delicious food</Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        <Button title="Get Started" onPress={() => navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.PRIMARY,
    marginHorizontal: 5
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.GREY,
    marginHorizontal: 5
  }
});

export default BoardScreen;