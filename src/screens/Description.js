import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import {CandleStickChart} from 'react-native-charts-wrapper';
import GraphContainer from '../components/GraphContainer';

const Description = ({route}) => {
  const {currentValue} = route.params;
  return (
    <View style={{flex: 1}}>
      <Header name={'Market'} />
      <View style={styles.subContainer}>
        <SubHeader name={'Bitcoin'} value={`${currentValue} USD`} />
        <View style={styles.graphContainerStyle}>
          <GraphContainer />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  chart: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  subContainer: {
    padding: 10,
  },
  graphContainerStyle: {
    height: 200,
    marginTop: 10,
  },
});

export default Description;
