import React, {Component} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Second',{isEditing:true})}>
          <Text>Go to SecondScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
