import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './components/Home';
import Country from './components/Country';

export default function Router(){
  return(
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
          
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Country">
            {props => <Country {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="Country0" component={Country}/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}