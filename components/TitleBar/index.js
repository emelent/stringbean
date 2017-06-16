import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'


class TitleBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {style, underlinkColor, day, date} = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.day}>{day},</Text>
        <Text style={styles.date}>{date}</Text>
      </View>  
    );
  }
}

TitleBar.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
  underlinkColor: PropTypes.string
};

TitleBar.defaultProps = {
  underlinkColor: 'transparent'
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    //backgroundColor: 'skyblue',
    paddingTop: 20,
    paddingLeft: 10
    //borderBottomWidth: 0.5,
    //borderColor: '#444'
  },
  day:{
    width: 80,
    fontSize: 28,
    fontFamily: 'Quicksand-Regular'
  },
  date: {
    fontSize: 16,
    marginTop: 12,
    fontFamily: 'Quicksand-Regular'
  },
  underlink:{
    position: 'absolute',
    left: 15,
    top: 55,
    height: 3,
    width: 50,
  }
});

export default TitleBar;
