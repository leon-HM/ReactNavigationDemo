import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

export default class SecondScreen extends Component {
    
  render() {
      const {navigation} = this.props
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress = { () => { navigation.navigate('Third') }}>
          <Text>I am secondScreen,goto Thrid</Text>
        </TouchableOpacity>
      </View>
    );
  }

 
}
