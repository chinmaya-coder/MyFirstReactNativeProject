/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Router from './src/navigation/router';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';

export const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
         <Router />
      </Provider>  
    );
  }
}

export default App;
