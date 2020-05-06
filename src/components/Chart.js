import React, { Component } from 'react'
import { Dimensions, Text, StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import MultiSlider from '@ptomasroos/react-native-multi-slider'; 

class Chart extends Component {
  
  state = {
    chart: null
  }
  
  constructor(props){
    super(props);
    this.state = {
      chart: loadChart(this, props.data)
    };
  }

  /*
  componentDidMount(){
    
  }
  */

  render(){
      if (!this.props.data) return (<></>)
      return (
        <View style={styles.main}>
        <Text style={styles.text}>{this.props.name}</Text>
        {this.state.chart}
        <MultiSlider
          
          values={[0, this.props.data['labels'].length]}
          sliderLength={Dimensions.get('window').width*0.7}
          min={0}
          max={this.props.data['labels'].length}
          step={1}
          onValuesChangeFinish ={values => {
            let x = []
            for (let i = 0; i < this.props.x_axis.length; i++) {
              if (!(i == values[0] || i == values[1]-1)){
                x.push('')
              }else{
                x.push(this.props.x_axis[i])
              }   
            }
            let y = this.props.data["datasets"][0]["data"]
            let data = {
              labels: x.slice(values[0],values[1]),
              datasets: [
                  {
                  data: y.slice(values[0],values[1]),
                  },
              ],
            }
            this.setState({chart: loadChart(this, data)})
          }}
        />
        </View>
      )
  }
}

const loadChart = (self, data) => <LineChart
    data={data ? data: self.props.data }
    width={Dimensions.get('window').width*0.8}
    height={200}
    segments={5}
    chartConfig={{
      backgroundColor: '#ffc300',
      backgroundGradientFrom: '#ffc300',
      backgroundGradientTo: '#ffc300',
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => "#212121",
      propsForBackgroundLines:{
        stroke: "#ffc300"
      },
      propsForDots: {
        r: "1",
        strokeWidth: "1",
        stroke: "#000000"
      }
    }}
    bezier
    style={styles.chart}
/>;

const styles = StyleSheet.create({
  text:{
    backgroundColor: "#ffc300", //"#ffc300",
    color: "#212121",
    padding: 5,
    width: Dimensions.get('window').width*0.883,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 0,
    marginTop: 25,
  },
  chart: {
    fontSize: 1,
    margin: -15,
    marginBottom: 15,
    marginTop: 0
  },
  main: {
    margin: 10,
    marginTop: 30,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Chart;