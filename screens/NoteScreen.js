import { View, Text, TextInput, Button } from "react-native"
import { IconButton } from "react-native-paper"
import React, { useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { v4 as uuid } from 'uuid';

const Note = ( {navigation}) => {
  const [newNote, onChangeNewNote] = React.useState('');
  const [newTitle, onChangeNewTitle] = React.useState('');

  
  
  const addNote = async () => {
    try{
      // retrieves past notes
      const result = await AsyncStorage.getItem('notes');
      let notes = [];
      if (result !== null) notes = JSON.parse(result);
      // adds the new note
      const updatedNotes = [...notes, {note: newNote, title: newTitle, id: uuid()}];
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (e) {
      // uh oh
      console.log('we broke')
    }
    console.log('done')
  }
  
  return (
    <View style={{backgroundColor:'#000', flex:1, paddingTop: 20}}>
        <View>
          {/* Go back to home screen */}
          <IconButton  icon='arrow-left-thick'
            color='#575DD3'
            size={40}
            onPress={() => navigation.goBack()}/>
        </View>

        <View style={{padding:'5%', width:'95%'}}>
          <TextInput placeholder="Title" style={{color:'white', fontSize:30,}}
          multiline={true}
          placeholderTextColor='#919090'
          underlineColorAndroid="rgba(255,255,255,0)"
          value={newTitle}
          onChangeText={onChangeNewTitle} 
          />
          
          <TextInput placeholder="Note" 
          multiline={true}
          placeholderTextColor='#919090'
          style={{color:'white', fontSize:15}}
          underlineColorAndroid="transparent"
          onChangeText={onChangeNewNote}
          value={newNote}
          
          />
        </View>
        <Button onPress={addNote} title='update'/>

    </View>
  )
}

export default Note