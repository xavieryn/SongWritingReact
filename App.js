import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PopOut from './components/PopOut';
import NoteScreen from './screens/NoteScreen'

const Stack = createStackNavigator();


export default function App() {
  const [notes, setNotes] = React.useState([])

  useEffect(() =>{
    notesList();
  })
  const notesList = async () => {
    //grab notes from async storage
    const result = await AsyncStorage.getItem('notes');
  
    //the empty array thing is confusing so, if result==null, it is empty array (the React.useState was being weird)
    //otherwise show all notes
    result ? setNotes(JSON.parse(result)) : setNotes([]);
  
  }
  if (notes.length == 0) {
    //null show notes 
    return (
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='PopOut' component={PopOut} /> 
          <Stack.Screen name='Note' component={NoteScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else{
    // not null, show notes
    return (
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='PopOut' component={PopOut} /> 
          <Stack.Screen name='Note' component={NoteScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  
}

