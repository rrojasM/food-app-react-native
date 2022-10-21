import uuid from 'react-native-uuid';
const categories = [
    { id: uuid.v4(), name: 'pizza', image: require('../assets/categories/pizza.png') },
    { id: uuid.v4(), name: 'Burger', image: require('../assets/categories/burger.png') },
    { id: uuid.v4(), name: 'Sushi', image: require('../assets/categories/sushi.png') },
    { id: uuid.v4(), name: 'Salad', image: require('../assets/categories/salad.png') }
];

export default categories;