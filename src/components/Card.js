import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Card = ({navigation, name, value, symbol}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={() =>
          navigation.navigate('Description', {currentValue: value})
        }>
        <View style={styles.subContainerStyle}>
          <View style={styles.tagStyle}>
            <Text style={styles.tagTextStyle}>{symbol}</Text>
          </View>
          <Text style={styles.labelStyle}>{name}</Text>
        </View>
        <Text style={styles.valueStyle}>{`${value} USD`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  subContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagStyle: {
    backgroundColor: '#000000',
    borderRadius: 90,
    padding: 10,

    alignItems: 'center',
  },
  tagTextStyle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  labelStyle: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 15,
  },
  valueStyle: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Card;
