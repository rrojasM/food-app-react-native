import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../utils/colors';
import foods from '../utils/foods';
import { Button } from '../components/Button';

const CartScreen = ({ navigation }) => {
  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontWeight: '400', fontSize: 13, color: COLORS.GREY }}>{item.ingredient}</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{currencyFormat(item.price)}</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
          <View style={styles.actionButton}>
            <Icon name='remove' size={28} color={COLORS.WHITE} />
            <Icon name='add' size={28} color={COLORS.WHITE} />
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <View style={styles.header}>
        <Icon name='arrow-back-ios' size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foods}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ padding: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Price</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold ' }}>{currencyFormat(50)}</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <Button title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  actionButton: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default CartScreen;