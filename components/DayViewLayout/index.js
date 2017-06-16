import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Dimensions from 'Dimensions';

import DayViewEvent from '../DayViewEvent';
import TitleBar from '../TitleBar';

const {width, height} = Dimensions.get('window');
const events = [
  {
    event: 'COS 132',
    type: 'L',
    time: '08:30',
    place: 'EMB 1-152',
    color: '#0471A6',
    active: false,
  },
  {
    event: 'COS 151',
    type: 'L',
    time: '09:30',
    place: 'EMB 1-152',
    color: '#048A81',
    active: false,
  },
  {
    event: 'STK 120',
    type: 'L',
    time: '10:30',
    place: 'EMB 2-152',
    color: '#C880B7',
    active: false,
  },
  {
    event: 'WTW 114',
    type: 'L',
    time: '12:30',
    place: 'Roos Hall',
    color: '#DD4B1A',
    active: false,
  },
  {
    event: 'AIM 101',
    type: 'L',
    time: '13:30',
    place: 'AIM Lab 5',
    color: '#414066',
    active: false,
  },
  {
    event: 'COS 132',
    type: 'T',
    time: '15:30',
    place: 'EMB 1-152',
    color: '#0471A6',
    active: true,
  },
  {
    event: 'COS 151',
    type: 'P',
    time: '17:30',
    place: 'Informatorium',
    color: '#048A81',
    active: false,
  },
];

class DayViewLayout extends Component{
  constructor(props){
    super(props);
  }

  renderEvents(events){
    return events.map((event, i) => (
      <DayViewEvent 
        style={styles.event}
        color={event.color}
        time={event.time}
        place={event.place}
        event={event.event}
        type={event.type}
        active={event.active}
        key={i}
      />
    )); 
  }

  render(){
    return (
      <View style={styles.container}>
        <TitleBar
          style={styles.titleBar}
          day='Wed'
          date='14 June(today)'
          underlinkColor='#82816D'
        />
        <LinearGradient colors={['#fff', 'transparent']}  style={styles.fade}/>
        <ScrollView style={styles.dayViewContainer}>
          {this.renderEvents(events)}
        </ScrollView>
        <LinearGradient colors={['transparent', '#fff']}  style={styles.fade2}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  fade: {
    zIndex: 1,
    position: 'absolute',
    top: 100,
    left: 0,
    height: 30,
    width
  },
  fade2: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    left: 0,
    height: 50,
    width
  },
  container: {
    flex: 1,
  },
  dayViewContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
  },
  titleBar:{ 
  }
});

export default DayViewLayout;
