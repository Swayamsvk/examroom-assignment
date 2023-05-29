import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const Landing = ({navigation}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const apiKey = 'a1a4b2fa-d572-492f-9729-749d6922b120';
    const url =
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

    fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Process the data as needed
        console.log(data);
        const finalData = data.data;
        setData(finalData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <View style={styles.containerStyle}>
      <Header name={'Market'} />
      <View style={styles.subContainerStyle}>
        {data && (
          <FlatList
            data={data}
            renderItem={({item}) => {
              console.log(item, 'this is the item');
              return (
                <View style={styles.cardContainerStyle}>
                  <Card
                    name={item.name}
                    value={item.num_market_pairs}
                    symbol={item.symbol}
                    navigation={navigation}
                  />
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainerStyle: {
    padding: 10,
  },
  cardContainerStyle: {
    marginTop: 20,
  },
});

export default Landing;
