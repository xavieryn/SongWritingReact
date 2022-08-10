import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useIsFocused } from '@react-navigation/native';

const NotesList = () => {
    const [notes, setNotes] = React.useState([])
    const isFocused = useIsFocused();

    useEffect (() => {         
        if (isFocused){
            Notes();
        }
        
    })
    
    // grabs data and stores array of object (notes) into global hook
    const Notes = async() => {
        const result = await AsyncStorage.getItem('notes');
        if (result) setNotes(JSON.parse(result));
    }

    // temporary function to clear notes when needed 
    const testWork = async() => {
        await AsyncStorage.clear()
        setNotes([])
        
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
            <Button onPress={testWork} title='wenis'/>

        </View>
        
    )
}

export default NotesList

