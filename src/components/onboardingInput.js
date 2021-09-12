/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Dimensions,
} from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export function OnboardingInput({
  text, secureTextEntry, value, onChangeText, style, labelStyle, multiline, numberOfLines, placeholder,
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.labelInput, labelStyle]}>{text}</Text>
      <TextInput
        style={[styles.inputOnboarding, style]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    minWidth: width * 0.8,
  },
  inputOnboarding: {
    backgroundColor: 'rgba(0, 210, 134, 0.5)',
    borderColor: 'white',
    borderRadius: 30,
    borderWidth: 2,
    color: 'white',
    minWidth: width * 0.8,
    padding: 3,
    paddingLeft: 8,

  },
  labelInput: {
    alignSelf: 'flex-start',
    color: 'white',
    fontWeight: '500',
    marginBottom: 5,
  },
});
