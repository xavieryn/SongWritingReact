import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PlusButton from './PlusButton'
import CustomDrawer from './CustomDrawer'
import NavBar from './NavBar';

const Drawer = createDrawerNavigator();


function Home({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ display:'flex', flexGrow: 1, backgroundColor:'black', }}>
        <NavBar navigation={navigation}/>
        <View style={{ flexGrow: 1}}>
          <Text style={{ color:'white'}} >Feed Screen</Text>
        </View>
        <View style={{ display:'flex', alignItems:'flex-end', }}>
          <PlusButton/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const PopOut = () => {
  return (

    <Drawer.Navigator useLegacyImplementation drawerContent={props => <CustomDrawer {...props} />} 
    screenOptions={{headerShown:false, swipeEdgeWidth:225}}>
      <Drawer.Screen name="Home" component={Home}  />
    
    </Drawer.Navigator>
  )
}

export default PopOut