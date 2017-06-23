import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native';
import PropTypes from 'prop-types';

export default class Drawer extends Component{
  render(){
    const {style, event, dragX, minX, maxX} = this.props;
    const inputRange = [minX, maxX];

    return (
      <View style={[styles.container, style]}
      >
        <Text style={styles.now}>
          Now
        </Text>
        <Text style={styles.event}>{event.event}</Text>
        <Text style={styles.description}>{event.description.replace(' ', '\n')}</Text>
        <Text style={styles.place}>{event.place}</Text>
        <Text style={styles.time}>{event.startTime} - {event.endTime}</Text>
        <Text style={[styles.type, {borderColor: event.color}]}>
          {event.type}
        </Text>
      </View>
    );
  }
}

Drawer.propTypes = {
  dragX: PropTypes.object.isRequired,
  minX: PropTypes.number.isRequired,
  maxX: PropTypes.number.isRequired,
  event: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  now: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 26,
    marginBottom: 15,
  },
  event: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 32,
    marginBottom: 10,
  },
  description: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
    marginBottom: 35,
  },
  place:{
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
  },
  time: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
  },
  type: {
    position: 'absolute',
    right: 20,
    top: 90,
    fontFamily: 'Quicksand-Bold',
    //color: '#fff',
    textAlign: 'center',
    width: 35,
    height: 35,
    fontSize: 16,
    borderRadius: 100,
    borderWidth: 2, 
    padding: 5
  }
});
