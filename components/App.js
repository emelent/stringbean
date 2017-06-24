import React, {Component} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import DVL from './DayViewLayout';


const version = '0.5.0';

class App extends Component {
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

const  navigationOptions = {
  headerMode: 'none'
};

export default StackNavigator({
  DayView: {
    screen:  App,
    headerMode: 'none',
    navigationOptions: {
      title: 'Feed',
    },
  }
}, navigationOptions);
