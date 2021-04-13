import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

export default class ThirdScreen extends Component {
    
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress = { () => { console.log('I am Second'); }}>
          <Text>I am third Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }

 
}
