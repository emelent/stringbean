/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';
import codePush from "react-native-code-push";

import DVL from './components/DayViewLayout';

const version = '0.5.0';
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {
    updateTitle: 'Update',
    optionalUpdateMessage: 'A new update is available, would you like to install it?',
    optionalIgnoreButtonLabel: 'Later',
    optionalInstallButtonLabel: 'Install',
  }
};

export default class stringbean extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Text style={{marginLeft: 10}}>Version {version}</Text>
        <DVL />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('stringbean', () => codePush(codePushOptions)(stringbean));
