import { View, Text, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import React, { useState } from 'react';
import { IconButton, Searchbar } from 'react-native-paper'
import { TextInput } from 'react-native-gesture-handler';

const NavBar = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
     return (
        <View style={{ paddingTop: 40 }}>
            <View style={{flexWrap:'wrap', flexDirection:'row', alignItems:'flex-start', alignItems:'center'}}>
                <IconButton
                    icon='menu'
                    color='white'
                    size={35}
                    onPress={() => navigation.openDrawer() }
                />
                
                    <View  style={{margin:10, width:'70%', marginLeft: 20,}}>
                        <Searchbar placeholder='Search' 
                        onChangeText={onChangeSearch} 
                        style={{ color:'white',borderRadius:30, backgroundColor:'#575DD3',}}
                        theme={{ colors: {text: 'white'}}}
                        iconColor='white' 
                        placeholderTextColor='white'
                        
                        
                        />
                    </View>
            </View>
            
            <View
                style={{
                    // hr
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,

                }}
            />
            </View>
            

  )
}

export default NavBar