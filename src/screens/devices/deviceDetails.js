import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function DeviceDetails({ route }) {
  const { item } = route.params;
  return (
    <View>
      <Text>
        Key:
        {' '}
        {item.key}
      </Text>
      <TouchableOpacity>
        <Text>Excluir dispositivo</Text>
      </TouchableOpacity>
    </View>
  );
}
