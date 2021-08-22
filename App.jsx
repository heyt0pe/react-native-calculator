import React from 'react';
import Calculator from './src/Calculator';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ transform: [{ 'scale': 1.5, }] }}><Calculator /></View>
  );
}


