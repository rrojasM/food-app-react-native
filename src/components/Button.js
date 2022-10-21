import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../utils/colors';

const Button = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.btnContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 18
    },
    btnContainer: {
        backgroundColor: COLORS.PRIMARY,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { Button };