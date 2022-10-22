import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../utils/colors';
import categories from '../utils/categories';
import foods from '../utils/foods';
const { width } = Dimensions.get('screen');
const cartWidth = width / 2 - 20;


const HomeScreen = ({ navigation }) => {
  const [selectCategoryIndex, setSelectCategoryIndex] = useState(0);

  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectCategoryIndex(index)}
          >
            <View
              style={{ backgroundColor: selectCategoryIndex == index ? COLORS.PRIMARY : COLORS.SECONDARY, ...styles.categoryBtn }}
            >
              <View style={styles.categoryBtnImgCon}>
                <Image style={{ height: 35, width: 35, resizeMode: 'cover' }} source={category.image} />
              </View>
              <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: selectCategoryIndex == index ? COLORS.WHITE : COLORS.PRIMARY }}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }

  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.WHITE}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image source={food.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.DARK }}>{food.name}</Text>
            <Text style={{ fontSize: 14, color: COLORS.GREY, marginTop: 2 }}>{food.ingredients}</Text>
          </View>
          <View
            style={{ marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.DARK }}>{currencyFormat(food.price)}</Text>
            <View style={styles.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.WHITE} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28, color: COLORS.GREY }}>Hello</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10, color: COLORS.GREY }}>Guf</Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.GREY }}>What do you want today?</Text>
        </View>
        <Image source={require('../assets/person.png')} style={{ height: 60, width: 60, borderRadius: 20, top: 10 }} />
      </View>
      <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={styles.inputContainer}>
          <Icon name='search' size={28} color="#FFF" />
          <TextInput placeholderTextColor="#FFF" placeholder='Search for food' style={{ flex: 1, fontSize: 18 }} />
        </View>
        <View style={styles.shortBtn}>
          <Icon name='tune' size={28} color={COLORS.WHITE} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row'
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.WHITE,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    height: 220,
    width: cartWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.WHITE
  },
  addToCartBtn: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.SECONDARY,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  shortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default HomeScreen