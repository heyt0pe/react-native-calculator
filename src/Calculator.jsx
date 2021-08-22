import { View, Text, StyleSheet } from "react-native";
import React, { useState } from 'react';
import DigitButton from "./components/DigitButton";

function Calculator() {

    const [display, setDisplay] = useState(0);
    const [formerDisplay, setFormerDisplay] = useState(0);
    const [operand, setOperand] = useState('');

    function clear() {
        setDisplay(0);
        setFormerDisplay(0);
        setOperand(0);
    }

    function displayNumber() {
        if (`${display}`.includes('.')) {
            return parseFloat(display);
        }
        return parseInt(display);
    }

    function invert() {
        setDisplay(displayNumber() * -1);
    }

    function percent() {
        setDisplay(displayNumber() / 100);
    }

    function decimal() {
        if (!`${display}`.includes('.')) {
            setDisplay(`${display}.`);
        }
    }

    function digitPress(digit) {
        if (display === 0) {
            setDisplay(digit);
        } else {
            setDisplay(`${display}${digit}`);
        }
    }

    function operation(value) {
        setFormerDisplay(displayNumber());
        setDisplay(0);
        setOperand(value);
    }

    function calculate() {
        switch (operand) {
            case '+':
                setDisplay(formerDisplay + displayNumber());
                break;
            case '-':
                setDisplay(formerDisplay - displayNumber());
                break;
            case '÷':
                setDisplay(formerDisplay / displayNumber());
                break;
            case 'x':
                setDisplay(formerDisplay * displayNumber());
                break;
            default:
                break;
        }
    }

    let digits = [];
    for (let i = 9; i > 0; i--) {
        digits.push(<DigitButton symbol={i} key={i} handleClick={digitPress} />);
    }
    return (
        <View style={styles.calculator}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{displayNumber()}</Text>
            </View>
            <View style={styles.buttonRow}>
                {displayNumber() === 0 && <DigitButton symbol={'AC'} handleClick={clear} />}
                {displayNumber() !== 0 && <DigitButton symbol={'C'} handleClick={clear} />}
                <DigitButton symbol={'±'} handleClick={invert} />
                <DigitButton symbol={'%'} handleClick={percent} />
                <DigitButton symbol={'+'} color='#FF9A00' handleClick={operation} />
            </View>
            <View style={styles.buttonRow}>
                <View style={styles.digitsCont}>{digits}</View>
                <View style={styles.operandCont}>
                    <DigitButton symbol={'-'} color='#FF9A00' handleClick={operation} />
                    <DigitButton symbol={'x'} color='#FF9A00' handleClick={operation} />
                    <DigitButton symbol={'÷'} color='#FF9A00' handleClick={operation} />
                </View>
            </View>
            <View style={styles.buttonRow}>
                <DigitButton symbol={'0'} size={120} handleClick={digitPress} />
                <DigitButton symbol={'.'} handleClick={decimal} />
                <DigitButton symbol={'='} color='#FF9A00' handleClick={calculate} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    calculator: {
        width: '100%',
        height: '100%',
        backgroundColor: '#444',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    display: {
        backgroundColor: '#222',
        width: 240,
        minHeight: 75,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        padding: 7,
    },
    displayText: {
        color: '#fff',
        fontSize: 26,
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    digitsCont: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 180,
    },
    operandCont: {
        display: 'flex',
        flexDirection: 'column',
        width: 60,
    },


});

export default Calculator;;;;;;