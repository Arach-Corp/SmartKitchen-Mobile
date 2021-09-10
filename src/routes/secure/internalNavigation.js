/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';
import TabNavigation, { TabDevice } from './tabNavigation';
import * as actions from '../../redux/modules/auth/actions';
import Profile from '../../screens/user/profile';

const Drawer = createDrawerNavigator();

export default function InternalNavigation() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(actions.logout());
    console.info('Exit Succefully!');
  };

  function DrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <Animated.View />
        <DrawerItem
          label="Logout"
          onPress={() => logout()}
          icon={
            ({ size, focused }) => (
              <MaterialCommunityIcons name="logout" color={focused ? '#30c735' : 'grey'} size={size} />
            )
          }
        />

      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={
        { headerShown: true }
    }
    >
      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={
           {
             drawerIcon: ({ size, focused }) => (
               <MaterialCommunityIcons name="face-profile" color={focused ? '#30c735' : 'grey'} size={size} />
             ),
           }
          }
      />
      <Drawer.Screen
        name="Produtos"
        component={TabNavigation}
        options={
           {
             drawerIcon: ({ size, focused }) => (
               <MaterialCommunityIcons
                 name="home-variant-outline"
                 color={focused ? '#30c735' : 'grey'}
                 size={size}
               />
             ),
           }
          }
      />
      <Drawer.Screen
        name="Devices"
        component={TabDevice}
        options={
           {
             headerShown: true,
             drawerIcon: ({ size, focused }) => (
               <MaterialCommunityIcons name="devices" color={focused ? '#30c735' : 'grey'} size={size} />

             ),
           }
          }
      />

    </Drawer.Navigator>
  );
}
