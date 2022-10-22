import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import COLORS from '../utils/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                style: {
                    height: 55,
                    borderTopWidth: 0,
                    elevation: 0
                },
                showLabel: false,
                activeTintColor: COLORS.PRIMARY,
                headerShown: false
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-filled" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name='LocalMall'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="local-mall" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name='Search'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                height: 60,
                                width: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: COLORS.WHITE,
                                borderColor: COLORS.PRIMARY,
                                borderWidth: 2,
                                borderRadius: 30,
                                top: -25,
                                elevation: 5
                            }}
                        >
                            <Icon name='search' color={COLORS.PRIMARY} size={28} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Favorite'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='favorite' color={color} size={28} />
                    )
                }}
            />
            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='shopping-cart' color={color} size={28} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator;