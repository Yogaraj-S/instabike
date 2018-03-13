/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from "./layouts/login";



const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
}); 

export default class App extends Component {
  render() {
      return <RootStack />;
  }
}
