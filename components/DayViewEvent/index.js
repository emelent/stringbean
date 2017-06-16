import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const indicatorColor = '#aaa';

class DayViewEvent extends Component {
  constructor(props) {
    super(props);
    this.showEvent = this.showEvent.bind(this);
  }

  showEvent(event){
    alert(`Pressed ${this.props.event}`);
  }

  render() {
    const {color, time, place, event, type, active, hideType, style} = this.props;

    const indicatorStyle = (active)?  [styles.indicator, styles.indicatorActive]:styles.indicator;
    const timeStyle = (active)? [styles.time, {color}] : styles.time;
    const eventStyle = (active)? [styles.event, {backgroundColor: color}] : [styles.event,{backgroundColor: color}];
    const lessonType = type.toLowerCase().startsWith('l');
    const typeEl = (lessonType || hideType)? null: (
      <Text style={[styles.type, {}]}>{type}</Text>
    );
    return (
      <View style={[styles.container, style]}>
        <View style={styles.bar} />
        <Text style={timeStyle}>{time}</Text>
        <View style={indicatorStyle} />
        <TouchableOpacity style={styles.detailsContainer} 
          onPress={this.showEvent}
          activeOpacity={0.5}
        >
          <Text style={eventStyle}>{event} {!lessonType && `(${type})`}</Text>
          <Text style={[styles.place]}>{place}</Text>
          {typeEl}
        </TouchableOpacity>
      </View>
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
  hideType: PropTypes.bool,
};

DayViewEvent.defaultProps = {
  active: false,
  hideType: true 
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 100,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
  },
  bar: {
    position: 'absolute',
    width: 2,
    left: 68,
    height: 100,
    backgroundColor: indicatorColor,
  },
  indicator: {
    backgroundColor: indicatorColor,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: indicatorColor,
    width: 8,
    height: 8
  },
  indicatorActive: {
    marginLeft: -2,
    backgroundColor: '#fff',
    width: 12,
    height: 12
  },
  time: {
    width: 55,
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
  },
  event: {
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    color: '#fff',
    borderRadius: 15,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
  },
  place: {
    fontSize: 14,
    borderRadius: 10,
    marginTop: 10,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'flex-start',
    fontFamily: 'Quicksand-Regular',
  },
  type: {
    position: 'absolute',
    right: 20,
    top: 20,
    borderRadius: 100,
    borderColor: indicatorColor,
    borderWidth: 2,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    padding: 5,
    width: 35,
    height: 35,
  }
});

export default DayViewEvent;
