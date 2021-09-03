import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductsNavigation from './productsNavigation';
import ExpiredProducts from '../../screens/expiredProducts';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={
      {
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
          title: 'Produtos',
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
      <Tab.Screen
        name="devices"
        component={ExpiredProducts}
        options={{
          title: 'Dispositivos',
          tabBarLabel: 'Dispositivos',
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons name="devices" color={focused ? '#30c735' : 'grey'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create(
  {
    tabStyle: {},
  },
);
