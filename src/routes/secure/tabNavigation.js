/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProductsNavigation from './productsNavigation';
import ExpiredProducts from '../../screens/products/expiredProducts';
import DeviceNavigation from './deviceNavigation';
import RegisterDevice from '../../screens/devices/registerDevice';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={
      {
        headerShown: false,
        headerTintColor: 'black',
        tabBarActiveTintColor: '#30c735',
      }
    }
    >
      <Tab.Screen
        name="products"
        component={ProductsNavigation}
        options={
        {

          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={focused ? '#30c735' : 'grey'} size={size} />
          ),
        }
      }
      />
      <Tab.Screen
        name="expiredProducts"
        component={ExpiredProducts}
        options={{
          title: 'Próximos ao vencimento',
          tabBarLabel: 'Próximos ao vencimento',
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons name="timer-sand-empty" color={focused ? '#30c735' : 'grey'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function TabDevice() {
  return (
    <Tab.Navigator
      screenOptions={
      {
        headerShown: false,
        headerTintColor: 'black',
        tabBarActiveTintColor: '#30c735',
      }
    }
    >
      <Tab.Screen
        name="devices"
        component={DeviceNavigation}
        options={{
          title: 'Dispostivos',
          tabBarLabel: 'Dispostivos',
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons name="devices" color={focused ? '#30c735' : 'grey'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="addDevices"
        component={RegisterDevice}
        options={{
          tabBarLabel: 'Adicionar Dispositivo',
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons name="add" color={focused ? '#30c735' : 'grey'} size={size} />
          ),

        }}

      />
    </Tab.Navigator>
  );
}
