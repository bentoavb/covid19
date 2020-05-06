import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

import Chart from './Chart';

class Country extends Component {
    state = {
      chart: null
    }
    render() {
        const {name} = this.props.route.params;
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.mainView}>
                    <Text style={styles.title}>{name}</Text>
                    {buttons(this)}
                    {this.state.chart}
                </View>
            </ScrollView>  
        )  
    }
}

const loadChart = (self, name) =>{
  const {linedata} = self.props.route.params;
  self.setState({
    chart: <Chart key={name} data={linedata[name]} x_axis={linedata['x_axis']} name={name}/>
  }) 
}

const buttons = (self) => <View style={styles.buttons}>
  {Array("Cases", "Deaths", "Recovered").map(e => {
    return (
      <View key={e} style={styles.button}> 
      <Button title={e} 
        buttonStyle={{backgroundColor:"#ffc300"}} 
        titleStyle={{color: "#212121"}}
        onPress={() => {
          loadChart(self, e)
        }}
      />
      </View>
    );
  })}
</View>

const styles = StyleSheet.create({
  scrollView: {
    alignSelf: "stretch",
  },
  mainView: {
    alignSelf: "stretch",
    flex: 1, 
    alignItems: "center", 
    justifyContent: "space-between",
    paddingTop: 10
  },
  title:{
    backgroundColor: "#ffc300", //"#ffc300",
    borderRadius: 3,
    color: "#212121",
    padding: 7,
    width: Dimensions.get('window').width*0.95,
    fontSize: 25,
    marginVertical: 15
  },
  buttons: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    marginHorizontal: 10
  }
});

const boxShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,

  elevation: 24,
}



export default Country;
