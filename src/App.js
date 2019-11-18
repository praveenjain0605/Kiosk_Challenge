/**
 * 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import MenuManagement from './Components/MenuManagement';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <MenuManagement />
    </Provider>
  );
}

export default App;

