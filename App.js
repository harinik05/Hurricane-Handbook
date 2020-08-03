//Import some features from react and react-native library
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import screens
import HomeScreen from './/HomeScreen';
import MaterialsScreen from './MaterialsScreen';
import HouseSealScreen from './HouseSealScreen';
import EvacuationScreen from './EvacuationScreen';
import MapScreen from './MapScreen';
import ReadScreen from './ReadScreen';
import LastMinuteScreen from './LastMinute';


//Use stack navigator to navigate between the files
const Stack = createStackNavigator();
function App() {
  return(
    
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />  
        <Stack.Screen name="Materials" component={MaterialsScreen} />       
        <Stack.Screen name="House-Sealing" component={HouseSealScreen} />
        <Stack.Screen name = "Evacuation" component = {EvacuationScreen}/>
        <Stack.Screen name = "ViewMap" component = {MapScreen}/>
        <Stack.Screen name = "Books" component = {ReadScreen}/>
        <Stack.Screen name = "Late" component = {LastMinuteScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    
  )
  }

export default App;





 
  