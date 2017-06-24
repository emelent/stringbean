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
    const animContainerStyle = {
      opacity: dragX.interpolate({
        inputRange,
        outputRange: [0, 1]
      }), 
      paddingTop: dragX.interpolate({
        inputRange,
        outputRange: [70, 50]
      }), 
    };
    const animTypeStyle = {
      transform: [
        {scale: dragX.interpolate({
          inputRange,
          outputRange: [0.2, 1]
        })}
      ], 
    };

    return (
      <Animated.View style={[styles.container, style, animContainerStyle]}>
        <Text style={styles.now}>
          Now
        </Text>
        <Text style={styles.event}>{event.event}</Text>
        <Text style={styles.description}>{event.description.replace(' ', '\n')}</Text>
        <Text style={styles.place}>{event.place}</Text>
        <Text style={styles.time}>{event.startTime} - {event.endTime}</Text>
        <Animated.Text style={[styles.type, {borderColor: event.color}, animTypeStyle]}>
          {event.type}
        </Animated.Text>
      </Animated.View>
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
    paddingTop: 50,
    paddingLeft: 10,
  },
  now: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 26,
    marginBottom: 15,
    marginLeft: -10,
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
    top: 110,
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
