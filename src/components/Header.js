import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({name}) => {
  return (
    <View style={styles.containerStyle}>
      {/* <Icon name="arrow-back" size={25} color={'#FFFFFF'} /> */}
      <Text style={styles.headerTextStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    padding: 10,
  },
  headerTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 5,
  },
});

export default Header;
