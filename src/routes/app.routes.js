import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../pages/Home';
import New from '../components/New';

function AppRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#fff',
            paddingTop: 20,
          },
          
          drawerActiveBackgroundColor: '#3b3dbf',
          drawerActiveTintColor: '#FFF',

          drawerInactiveBackgroundColor: '#f0f2ff',
          drawerInactiveTintColor: '#121212',
        }
      }
    >
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Registro" component={New} />
    </Drawer.Navigator>
  );
}

export default AppRoutes;