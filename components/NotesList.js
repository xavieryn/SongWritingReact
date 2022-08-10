import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const NotesList = () => {
    const [notes, setNotes] = React.useState([])
    useEffect (() => { 
        Notes();
    })
    
    // grabs data and stores array of object (notes) into global hook
    const Notes = async() => {
        const result = await AsyncStorage.getItem('notes');
        if (result) setNotes(JSON.parse(result));
        
    }

    return (
        <View>
            {/* shows notes in reverse order */}
            {notes.slice(0).reverse().map((item) => {
                return(
                <View style={{borderColor:'white', borderWidth:1, borderRadius:15, margin:'3%', padding:'2%'}} key={item.id}>
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

