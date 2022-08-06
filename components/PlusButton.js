import * as React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';

const PlusButton = ({ navigation }) => {
    return(
        <IconButton
            
            icon='plus-box-outline'
            color='#575DD3'
            size={75}
            onPress={() => navigation.navigate('NoteScreen')}
        
        />
    )
}
export default PlusButton;
