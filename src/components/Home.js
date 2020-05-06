import React, { Component } from 'react'
import { TextInput, View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import {loadCountry, showCountries} from '../tools/countries';

class Home extends Component {
  state = {
      data: {},
      keys: [],
      options: [],
      linedata: null
  }
  componentDidMount = () => {
     fetch('https://pomber.github.io/covid19/timeseries.json', { method: 'GET'})
     .then((response) => response.json())
     .then((res) => {
        this.setState({ data: res, keys: Object.keys(res), options: showCountries('', Object.keys(res))})
     })
     .catch((error) => console.error(error));
  }
  render() {
     return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.mainView}> 

        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({ options: showCountries(text, this.state.keys) })
          }}
          value={this.state.input}
        />

        <View style={{alignSelf: "stretch"}}>
          {this.state.options.map(e => {
            return (
              <View key={e} style={{marginTop:10, marginHorizontal: 10}}>
              <Button title={e} 
              buttonStyle={{backgroundColor:"#ffc300"}} 
              titleStyle={{color: "#212121"}}
              onPress={() => {
                let linedata = loadCountry(this.state.data[e])
                this.props.navigation.navigate("Country", {
                  linedata: linedata,
                  name: e
                })
              }}
              />
              </View>
            );
          })}
        </View>
  
        </View>
      </ScrollView>
      
     )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    alignSelf: "stretch",
  },
  mainView: {
    alignSelf: "stretch",
    flex: 1, 
    alignItems: "center", 
    justifyContent: "space-between"
  },
  textInput: { 
    marginTop: 10, 
    height: 40, 
    width: 300, 

    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius: 3 
  }
});


export default Home;
