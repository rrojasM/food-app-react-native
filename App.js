import React from 'react';
import { StatusBar } from 'react-native';
import COLORS from './src/utils/COLORS';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BoardScreen from './src/screens/BoardScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import BottomNavigator from './src/navigation/BottomNavigator';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='BoardScreen' component={BoardScreen} />
        <Stack.Screen name='Home' component={BottomNavigator} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(App);
