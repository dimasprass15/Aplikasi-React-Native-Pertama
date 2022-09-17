import React from "react"
import {Text, View, Image} from "react-native"

const App = () => {
  return (
    <View>
    <View style={{width:100, height:100, backgroundColor:'blue'}}/>
      <Text>Dimas</Text>
      <Prassetya />
      <Text>Fahima</Text>
      <Photo />
    </View>
  )
}

const Prassetya = () => {
  return <Text>Prassetya Dimas</Text>
}

const Photo = () => {
  return <Image source={{uri:'https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg'}} 
    style={{width:50, height:50}}
  />
}

export default App