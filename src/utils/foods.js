import uuid from 'react-native-uuid';
const foods = [
    {
        id: uuid.v4(),
        name: 'Meat Pizza',
        price: 90,
        ingredients: 'Mixed Pizza',
        image: require('../assets/meatPizza.png'),
    },
    {
        id: uuid.v4(),
        name: 'Cheese Pizza',
        price: 60,
        ingredients: 'Cheese Pizza',
        image: require('../assets/cheesePizza.png'),
    },
    {
        id: uuid.v4(),
        name: 'Sushi Makizushi',
        price: 80,
        ingredients: 'Mixed Pizza',
        image: require('../assets/meatPizza.png'),
    },
    {
        id: uuid.v4(),
        name: 'Chicken Burger',
        price: 95,
        ingredients: 'Salmon Meat',
        image: require('../assets/sushiMakizushi.png'),
    }
];

export default foods;