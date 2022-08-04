import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import {View, Text} from 'react-native'

const CustomDrawer = ( props ) => {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor:'#21212E', paddingTop:0}}>
            <View style={{padding: 20}}>
                <Text style={{color:'#fff'}}>Song Writing App</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
       
    </View>
  )
}
export default CustomDrawer;
