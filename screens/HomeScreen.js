import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import PlusButton from '../components/PlusButton'
import NavBar from '../components/NavBar';

  const HomeScreen = ( {navigation }) => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ display:'flex', flexGrow: 1, backgroundColor:'black', }}>
          <NavBar navigation={navigation}/>
          <View style={{ flexGrow: 1}}>
            <Text style={{ color:'white'}} >Feed Screen</Text>
          </View>
          <View style={{ display:'flex', alignItems:'flex-end', }}>
            <PlusButton navigation={navigation}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  
  export default HomeScreen