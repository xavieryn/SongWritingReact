import { View, Text, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import React, { useState } from 'react';
import { IconButton, Searchbar } from 'react-native-paper'

const NavBar = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
     return (
        <View style={{backgroundColor:'#000', paddingTop: 40 }}>
            <View style={{flexWrap:'wrap', flexDirection:'row', alignItems:'flex-start', alignItems:'center'}}>
                <IconButton
                    icon='menu'
                    color='white'
                    size={35}
                    onPress={() => navigation.openDrawer() }
                />
                
                    <View  style={{margin:10, width:'70%', marginLeft: 20,  }}>
                    <Searchbar placeholder='Search' onChangeText={onChangeSearch} style={{borderRadius:30, backgroundColor:'#575DD3'}} />
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