/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import codePush from 'react-native-code-push';
import app from './components/App';


const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {
    updateTitle: 'Update',
    optionalUpdateMessage: 'A new update is available, would you like to install it?',
    optionalIgnoreButtonLabel: 'Later',
    optionalInstallButtonLabel: 'Install',
  }
};

AppRegistry.registerComponent('stringbean', () => codePush(codePushOptions)(app));
