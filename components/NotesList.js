import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const NotesList = () => {
    const [notes, setNotes] = React.useState([])
    const [test, setTest] = React.useState([]);
    useEffect (() => { 
        Notes();
    })
    const Notes = async() => {
        const result = await AsyncStorage.getItem('notes');
        if (result) setNotes(JSON.parse(result));
        // setTest(notes.map(item => ({text: item.text, title: item.title})) )
        //console.log(test);
    }

    return (
        <View>
        {notes.slice(0).reverse().map((item) => {
            return(
            //{console.log(notes)}
            <View style={{borderColor:'white', borderWidth:1, borderRadius:15, margin:'3%', padding:'2%'}}>
                <Text style={{color:'#fff'}}>{item.title}</Text>
                <Text style={{color:'white'}}>{item.note}</Text>
            </View>
            )
        })
        }
        </View>
        
    )
}

export default NotesList

