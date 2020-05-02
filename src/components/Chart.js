import React from 'react';
import { Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit';

function Chart({ data }) {
  
  if (!data) return (<></>)
  
  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width*0.85}
      height={220}
      chartConfig={{
        backgroundColor: '#ffc300',
        backgroundGradientFrom: '#ffc300',
        backgroundGradientTo: '#ffc300',
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
          r: "1",
          strokeWidth: "1",
          stroke: "#ffffff"
        }
      }}
      bezier
      style={{
        fontSize: 1,
        margin: -15,
        marginVertical: 30
      }}
    />
  )
}

export default Chart;
