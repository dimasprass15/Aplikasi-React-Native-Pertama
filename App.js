import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

//functional component / arrow function
const App = () => {
  return (
    <View>
      <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
      <Text>Dimas</Text>
      <Prassetya />
      <Text>Fahima</Text>
      <Photo />
      <TextInput style={{borderBottomWidth: 1}} />
      <BoxBlue />
    </View>
  );
};

//functional component / arrow function
const Prassetya = () => {
  return <Text>Prassetya Dimas</Text>;
};

//functional component / arrow function
const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg',
      }}
      style={{width: 50, height: 50}}
    />
  );
};

//class component
class BoxBlue extends Component() {
  render() {
    return <Text>Dimas Aja lah</Text>;
  }
}

export default App;
