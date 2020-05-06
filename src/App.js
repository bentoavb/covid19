import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Title from './components/Title';
import Router from './Router.js';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={"#FFA000"}  />
      <Title />
      <Router />
    </>
  );
};

export default App;