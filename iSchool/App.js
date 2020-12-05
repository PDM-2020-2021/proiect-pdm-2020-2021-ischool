import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground, Image} from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Real from './Real';
import Uman from './Uman';
import Succes from './Succes';
import {decode, encode} from'base-64';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    },
    Real: {
	screen: Real
    },
    Uman: {
        screen: Uman
    },
    Succes: {
        screen: Succes
    }},
    {
    initialRouteName: 'Home',
    }
);
const Start=createAppContainer(AppNavigator);
export default class App extends React.Component{
    render(){

          return <Start/>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
