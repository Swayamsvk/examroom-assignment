import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-charts-wrapper';

const GraphContainer = () => {
  const data = [
    {x: 0, y: 10},
    {x: 1, y: 5},
    {x: 2, y: 8},
    {x: 3, y: 12},
    {x: 4, y: 6},
    // Add more data points as needed
  ];

  return (
    <View style={{flex: 1}}>
      <LineChart
        style={{flex: 1}}
        data={{
          dataSets: [
            {
              values: data,
              label: 'Line Dataset',
              config: {
                color: '#000000',
                drawValues: false,
                // Customize other line chart properties as needed
              },
            },
          ],
        }}
        xAxis={
          {
            // Customize x-axis properties if necessary
          }
        }
        yAxis={
          {
            // Customize y-axis properties if necessary
          }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: 220,
    width: '50%',
    height: '50%',
  },
  chart: {
    flex: 1,
  },
});

export default GraphContainer;
