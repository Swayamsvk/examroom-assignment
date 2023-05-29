import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Login from './src/screens/Login';
import Landing from './src/screens/Landing';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Description from './src/screens/Description';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <Splash />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Description" component={Description} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
