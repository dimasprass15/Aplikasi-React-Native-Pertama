import { View, TextInput, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', margin: 20}}>
      <Text style={{fontWeight: 'bold'}}>Nama Lengkap</Text>
      <TextInput style={{borderBottomWidth: 1, marginBottom: 60}} />
      <Text style={{fontWeight: 'bold'}}>Password</Text>
      <TextInput style={{borderBottomWidth: 1}} />
      <View 
        style={{backgroundColor:'orange', width:350, height:50, marginTop:25, borderRadius:10, justifyContent:'center', alignItems:'center'}}
      >
        <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Silahkan Login</Text>
      </View>
    </View>
  );
}

export default App