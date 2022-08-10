import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import {View, Text} from 'react-native'
import { IconButton } from 'react-native-paper'

const CustomDrawer = ( props ) => {
  return (
    // customizes drawer by adding css and title 
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor:'#21212E', paddingTop:43, flex: 1}} >
            <View >
              <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding: 4}}>
                <Text style={{color:'#fff', fontSize:20, margin:10}}>Song Writing App</Text>
                <IconButton
                  style={{alignItems:'flex-end',marginLeft:40}}
                  icon='plus'
                  color='white'
                  size={30}
                  onPress={() => console.log('Pressed')}
                />
              </View>
                <View style={{paddingRight:20}}>
                  <View
                    style={{
                      // hr
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,

                    }}
                  />
                </View>
                
            </View>
            <View style={{paddingTop:20}}>
              <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
       
    </View>
  )
}
export default CustomDrawer;
