import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const indicatorColor = '#888';

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
      <View style={[styles.container, style]}>
        <View style={styles.bar} />
        <Text style={styles.time}>{time}</Text>
        <View style={indicatorStyle} />
        <TouchableOpacity style={styles.detailsContainer} 
          onPress={this.showEvent}
        >
          <Text style={[styles.event, {color}]}>{event}</Text>
          <Text style={styles.place}>{place}</Text>
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
};

DayViewEvent.defaultProps = {
  active: false 
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
    width: 1,
    left: 68,
    height: 100,
    backgroundColor: indicatorColor,
  },
  indicator: {
    backgroundColor: indicatorColor,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: indicatorColor,
    width: 7,
    height: 7
  },
  indicatorActive: {
    marginLeft: -1,
    backgroundColor: '#fff',
    width: 10,
    height: 10
  },
  time: {
    width: 55,
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
  },
  event: {
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    marginBottom: 5,
  },
  place: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
  },
});

export default DayViewEvent;
