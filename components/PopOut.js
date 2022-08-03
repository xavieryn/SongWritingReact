import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IconButton from './PlusButton'

const Drawer = createDrawerNavigator();


function Feed() {
  return (
    <View style={{ display:'flex', flexGrow: 1, backgroundColor:'black', }}>
      <View style={{ flexGrow: 1}}>
        <Text style={{ color:'white'}} >Feed Screen</Text>
      </View>
      <View style={{ display:'flex', alignItems:'flex-end', }}>
        <IconButton/>
      </View>
    </View>
  );
}


const PopOut = () => {
  return (

    <Drawer.Navigator useLegacyImplementation >
      {/* screenOptions={{headerShown: false}}   */}
      <Drawer.Screen name="Feed" component={Feed}  />
    
    </Drawer.Navigator>
  )
}

export default PopOut