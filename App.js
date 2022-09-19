import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'


const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        }}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <Text
        style={{
          fontWeight: 'bold',
          marginTop: 10,
          fontSize: 16,
          color: '#3B3B3B',
        }}>
        Fahima Nur Zaina Islami Login
      </Text>
      <TouchableOpacity style={{backgroundColor: '#15CECE', width:250, height:40, marginTop:5, borderRadius:15}}>
        <Text style={{fontSize:15, justifyContent:'center', alignItems:'center'}}>Silahkan Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App