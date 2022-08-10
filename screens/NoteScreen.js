import { View, Text, TextInput, Button } from "react-native"
import { IconButton } from "react-native-paper"
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"

const Note = ( {navigation}) => {
  const [newNote, onChangeNewNote] = React.useState('');
  const [newTitle, onChangeNewTitle] = React.useState('');

  const test = async () => {
    try{
      const result = await AsyncStorage.getItem('notes');
      let notes = [];
      if (result !== null) notes = JSON.parse(result);
      const updatedNotes = [...notes, {note: newNote, title: newTitle}];
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (e) {
      console.log('we broke')
    }
    console.log('done')
  }
 
  const testWork = async() => {
    await AsyncStorage.clear()
    // console.log(JSON.parse(wewewe));
  }
  return (
    <View style={{backgroundColor:'#000', flex:1, paddingTop: 20}}>
        <View>
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
        <Button onPress={test} title='update'/>
        <Button onPress={testWork} title='wenis'/>

    </View>
  )
}

export default Note