import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated
} from 'react-native';
import Interactable from 'react-native-interactable';
import LinearGradient from 'react-native-linear-gradient';
import Dimensions from 'Dimensions';

import DayViewEvent from '../DayViewEvent';
import TitleBar from '../TitleBar';

const {width, height} = Dimensions.get('window');
const drawerWidth = 200;
const dayViewContainerWidth = width + drawerWidth;
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
    type: 'T',
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

export default class DayViewLayout extends Component{
  constructor(props){
    super(props);
    this.dX = new Animated.Value(0);
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
        dX={this.dX}
        minX={0}
        maxX={drawerWidth}
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
          <Interactable.View
            style={styles.interact}
            horizontalOnly={true}
            snapPoints={[{x: 0, id: 'close'}, {x: drawerWidth, id: 'open'}]}
            onSnap={this.onDrawerSnap}
            animatedValueX={this.dX}
          >
            <View style={styles.mainContainer}>
              <View style={styles.drawer}>
                {/*TODO Hey put me in my own component*/}
                <Text>I am the drawer!</Text>
              </View>
              <View style={styles.content}>
                {this.renderEvents(events)}
              </View>
            </View>
          </Interactable.View>
        </ScrollView>
        <LinearGradient colors={['transparent', '#fff']}  style={styles.fade2}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  interact: {
    left: -drawerWidth
  },
  mainContainer: {
    flexDirection: 'row'
  },
  drawer: {
    width: drawerWidth,
  },
  content: {
    flex: 1,
  },
  fade: {
    zIndex: 1,
    position: 'absolute',
    top: 80,
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
    width: dayViewContainerWidth,
    flexDirection: 'column',
    marginLeft: 15,
  },
  titleBar:{ 
  }
});

