/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {createMyStackNavigator} from './src/router/MyStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
const MyStack = createMyStackNavigator()

class App extends Component {
  isDarkMode = false;

  backgroundStyle = {
    backgroundColor: this.isDarkMode ? Colors.darker : Colors.lighter,
  };

  render() {
    return (
        <NavigationContainer>
          <MyStack.Navigator initialRouteName="Home" >
              <MyStack.Screen name="Home" component={HomeScreen} />
              <MyStack.Screen name="Second" component={SecondScreen} />
              <MyStack.Screen name="Third" component={ThirdScreen} />
          </MyStack.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
