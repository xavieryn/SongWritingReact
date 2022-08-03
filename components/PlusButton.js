import * as React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';

const PlusButton = () => {
    return(
        <IconButton
            icon='plus-box-outline'
            color='white'
            size={75}
            onPress={() => console.log('Pressed')}
        
        />
    )
}
export default PlusButton;
