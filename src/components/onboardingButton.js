/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';

export default function OnboardingButton({ text, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0fb77a',
    padding: 5,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
