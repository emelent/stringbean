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
import DVL from './components/DayViewLayout';
import DVL2 from  './components2/DayViewLayout'
import codePush from "react-native-code-push";

const version = '0.4.14';
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {
    updateTitle: 'Update',
    optionalUpdateMessage: 'Yo, the new-new is out, you finna update?',
    optionalIgnoreButtonLabel: "Nah fam, I'm good",
    optionalInstallButtonLabel: 'Hook it up',
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
