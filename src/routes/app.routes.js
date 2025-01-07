import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../pages/Home';
import New from '../components/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props}/>}
      screenOptions={
        {
          headerShown: false,
          
          drawerItemStyle: {
            marginBottom: 10,
          },

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
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
}

export default AppRoutes;