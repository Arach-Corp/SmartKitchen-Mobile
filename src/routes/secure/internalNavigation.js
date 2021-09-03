import React from 'react';
import {
  createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';
import TabNavigation from './tabNavigation';
import * as actions from '../../redux/modules/auth/actions';

const Drawer = createDrawerNavigator();

export default function InternalNavigation() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(actions.logout());
  };

  function DrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <Animated.View />
        <DrawerItem
          label="logout"
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
        { headerShown: false }
    }
    >
      <Drawer.Screen
        name="Perfil"
        component={TabNavigation}
        options={
           {
             drawerIcon: ({ size, focused }) => (
               <MaterialCommunityIcons name="face-profile" color={focused ? '#30c735' : 'grey'} size={size} />
             ),
           }
          }
      />
      <Drawer.Screen
        name="Home"
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

    </Drawer.Navigator>
  );
}
