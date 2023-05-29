import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SubHeader = ({name, value}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.headerTextStyle}>{name}</Text>
      <Text style={styles.valueStyle}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  valueTextStyle: {
    fontSize: 18,
    color: '#908D8D',
  },
});

export default SubHeader;
