import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

function DigitButton(props) {
    const colorStyle = {
        backgroundColor: props.color
    };

    const sizeStyle = {
        width: props.size
    };


    return (
        <Pressable style={[styles.button, colorStyle, sizeStyle]} onPress={() => props.handleClick(props.symbol)}>
            <Text>{props.symbol}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        minWidth: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#777',
        borderWidth: 0.5,
        borderColor: "#222"
    }
});

export default DigitButton;