import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import PlusButton from '../components/PlusButton'
import NavBar from '../components/NavBar';
import NotesList from '../components/NotesList';

  const HomeScreen = ( {navigation }) => {
    return (
      //lets user click out of keyboard
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ display:'flex', flexGrow: 1, backgroundColor:'#21212E' }}>
          
          {/* search bar and drawer */}
          <NavBar navigation={navigation}/>
          <View style={{backgroundColor:'black', display:'flex', flexGrow:1, paddingTop:30}}>
            <View style={{ flexGrow: 1 }}>

              {/* Notes */}
              <NotesList/>
            </View>

            {/* add new note */}
            <View style={{ display:'flex', alignItems:'flex-end', }}>
              <PlusButton navigation={navigation}/>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  
  export default HomeScreen