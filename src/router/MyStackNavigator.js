import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MyStackRouter from './MyStackRouter'
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
  StackRouter,
} from '@react-navigation/native';

function StackNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const {state, navigation, descriptors} = useNavigationBuilder(MyStackRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <View style={[{flex: 1}, contentStyle]}>
        {descriptors[state.routes[state.index].key].render()}
      </View>
    </NavigationHelpersContext.Provider>
  );
}

export const createMyStackNavigator = createNavigatorFactory(StackNavigator);
