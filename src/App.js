import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Title from './components/Title';
import Content from './components/Content';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={"#900c3f"}  />
        <View style={styles.mainView}>
            <Title />
            <Content /> 
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    alignItems: "center"
  },
});

export default App;