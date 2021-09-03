/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Dimensions,
} from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export function OnboardingInput({
  text, secureTextEntry, value, onChangeText, style,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelInput}>{text}</Text>
      <TextInput
        style={[styles.inputOnboarding, style]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    minWidth: width * 0.8,
  },
  labelInput: {
    color: 'white',
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  inputOnboarding: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    color: 'white',
    padding: 3,
    minWidth: width * 0.8,
    paddingLeft: 8,
    backgroundColor: 'rgba(0, 210, 134, 0.5)',

  },
});
