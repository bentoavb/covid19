import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Title() {
  return (
    <View style={styles.view}>
      <Text style={styles.text2}>Real Time</Text>
      <Text style={styles.text1}>COVID-19</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
      backgroundColor: "#900c3f",
      alignSelf: "stretch",
      flex: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: 10
    },
    text1: {
      fontSize: 30,
      marginLeft: 7,
      color: "#ffffff"
    },
    text2: {
      fontSize: 21,
      color: "#ffffff"
    }
});

export default Title;
