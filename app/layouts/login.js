import React, { Component } from 'react';
import { 
  View,Platform, Text, Alert, TextInput, Image, KeyboardAvoidingView, TouchableOpacity,StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu.',
});

export default class HomeScreen extends Component {

  constructor(props) {
    super(props); 
    
    this.state = ({
      email: '',
      pwd: '',
      validEmail: false,
      successResponse: false,
      userName: ''
    });

  }

    render() {
      return (
        <KeyboardAvoidingView style={styles.container}>
          <TextInput
            style={styles.inputForm}
            placeholder="Enter your Email"
            onChangeText={(text) => this.validate(text)}
            keyboardType='email-address'
          />
          <TextInput
            style={styles.inputForm}
            placeholder="Enter your Password"
            onChangeText={(pwd) => this.setState({pwd})}
            secureTextEntry
          />
          <TouchableOpacity style={styles.buttonContainer} 
                     onPress={() => this.submitMethod()}>
             <Text  style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity> 
          {this.state.successResponse ? <Page userName={this.state.userName}></Page>: null}     
        </KeyboardAvoidingView>
      );
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
  