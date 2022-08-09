import { View, Text, TextInput } from "react-native"
import { IconButton } from "react-native-paper"

const Note = ( {navigation}) => {
  return (
    <View style={{backgroundColor:'#000', flex:1, paddingTop: 20}}>
        <View>
          <IconButton  icon='arrow-left-thick'
            color='#575DD3'
            size={40}
            onPress={() => navigation.goBack()}/>
        </View>
        <View style={{padding:20}}>
          <TextInput placeholder="Title" style={{color:'white', fontSize:30 }}
          placeholderTextColor='#919090'
          />
          <TextInput placeholder="Note" 
          style={{color:'white', fontSize:15}}
          placeholderTextColor='#919090'
          
          />
        </View>
    </View>
  )
}

export default Note