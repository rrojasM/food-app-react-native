import uuid from 'react-native-uuid';
const foods = [
    {
        id: uuid.v4(),
        name: 'Meat Pizza',
        price: 8.30,
        ingredients: 'Mixed Pizza',
        image: require('../assets/meatPizza.png'),
    },
    {
        id: uuid.v4(),
        name: 'Cheese Pizza',
        price: 7.10,
        ingredients: 'Cheese Pizza',
        image: require('../assets/cheesePizza.png'),
    },
    {
        id: uuid.v4(),
        name: 'Sushi Makizushi',
        price: 8.30,
        ingredients: 'Mixed Pizza',
        image: require('../assets/meatPizza.png'),
    },
    {
        id: uuid.v4(),
        name: 'Chicken Burger',
        price: 9.55,
        ingredients: 'Salmon Meat',
        image: require('../assets/sushiMakizushi.png'),
    }
];

export default foods;