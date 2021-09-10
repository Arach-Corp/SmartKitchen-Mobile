import React from 'react';
import { Text, StyleSheet } from 'react-native';

// eslint-disable-next-line react/prop-types
export function Logo({ style }) {
  return (
    <Text style={[style, styles.logoStyle]}>
      SmartKitchen
    </Text>

  );
}

const styles = StyleSheet.create({
  logoStyle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
