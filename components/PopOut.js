import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from './CustomDrawer'
import HomeScreen from '../screens/HomeScreen'
import NoteScreen from '../screens/NoteScreen'
const Drawer = createDrawerNavigator();

// drawer 
const PopOut = () => {
  return (
    <Drawer.Navigator useLegacyImplementation drawerContent={props => <CustomDrawer {...props} />} 
    screenOptions={{headerShown:false, swipeEdgeWidth:225}}>
      <Drawer.Screen name="Home" component={HomeScreen}  />
      <Drawer.Screen name="NoteScreen" component={NoteScreen} options={{drawerItemStyle:{display:'none'}}} />
    </Drawer.Navigator>
  )
}

export default PopOut