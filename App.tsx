import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainTabs from './src/navigation/MainTabs';
import {NavigationContainer} from '@react-navigation/native';
import { store } from './src/store/Store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
          <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  
  );
};

export default App;

const styles = StyleSheet.create({});


