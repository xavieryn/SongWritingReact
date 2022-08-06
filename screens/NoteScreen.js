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
          <TextInput placeholder="Title" style={{color:'white', opacity:.5, fontSize:30 }}
          placeholderTextColor='white'
          />
          <TextInput placeholder="Note" 
          style={{color:'white', opacity:.5, fontSize:15}}
          placeholderTextColor='white'
          
          />
        </View>
    </View>
  )
}

export default Note