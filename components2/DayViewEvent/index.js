import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const indicatorColor = '#555';

class DayViewEvent extends Component {
  constructor(props) {
    super(props);
    this.showEvent = this.showEvent.bind(this);
  }

  showEvent(event){
    alert(`Pressed ${this.props.event}`);
  }

  render() {
    const {color, time, place, event, type, active, style} = this.props;
    const indicatorStyle = (active)?  [styles.indicator, styles.indicatorActive]:styles.indicator;

    return (
      <TouchableOpacity style={[styles.container, style]}
        onPress={this.showEvent}
      >
        <View style={indicatorStyle}/>
        <View style={styles.leftContainer}>
          <Text style={[styles.eventText, {color}]}>{event}{` (${type})`}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{time}</Text>
            <Text style={styles.placeText}>{place}</Text>
          </View>
        </View>
        {
          //<View style={styles.rightContainer}>
            //<View style={[styles.colorBlock, {backgroundColor: color}]} />
          //</View>
        }
      </TouchableOpacity>
    );
  }
};

DayViewEvent.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

DayViewEvent.defaultProps = {
  active: false 
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    height: 100,
    margin: 5,
  },
  leftContainer: {
    flex: 1,
    paddingLeft: 10
  },
  rightContainer: {
    flex: 0.1,
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  indicator: {
    backgroundColor: indicatorColor,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: indicatorColor,
    width: 10,
    height: 10
  },
  indicatorActive: {
    backgroundColor: '#fff',
    marginLeft: -2,
    width: 15,
    height: 15
  },
  eventText: {
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    marginBottom: 5,
  },
  timeText: {
    width: 80,
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
  },
  placeText: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
  },
  colorBlock:{
    position: 'absolute',
    left: 20,
    top: 10,
    height: 24,
    width: 3,
  }
});

export default DayViewEvent;
