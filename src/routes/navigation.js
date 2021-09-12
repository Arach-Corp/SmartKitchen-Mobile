import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import InternalNavigation from './secure/internalNavigation';
import { PublicNavigation } from './public/publicNavigation';

export function Navigation() {
  const isLoggedIn = useSelector((state) => state.authState.isLoggedIn);

  return (
    <NavigationContainer>
      {
        isLoggedIn ? (
          <PublicNavigation />
        ) : (
          <InternalNavigation />
        )
      }

    </NavigationContainer>
  );
}
