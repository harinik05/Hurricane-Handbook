//1. Import components and libraries from react-native
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

function EvacuationScreen({ navigation }) {
 
    return (
      <View>
      <ScrollView>
      <View>
        <Text style = {evacuationStyles.bigTitle}>PREPARE TO EVACUATE</Text>
        <Text style = {evacuationStyles.content}>1. Brainstorm Evacuation Plan</Text>
        <Text style = {evacuationStyles.quote}>Plan accordingly with your family members. Make sure to keep a record of contacts with you on your journey. Plan ahead of time when it comes to elders, children, and/or pets. Don't waste your time as this could be dangerous to your life. . {'\n'} {'\n'}  </Text> 

      </View>

      <View>
        <Text style = {evacuationStyles.content}>2.Gather important supplies </Text>
        <Text style = {evacuationStyles.quote}>Gather supplies that are categorized as important from the materials tab.  {'\n'} {'\n'}  </Text> 

      </View>

      <View>
        <Text style = {evacuationStyles.content}>3. Get everything ready </Text>
        <Text style = {evacuationStyles.quote}>Place the supplies, important documents like passport, birth certificate, etc. in the car. Make sure that everyone gets ready and you know where to go.  {'\n'} {'\n'}  </Text> 

      </View>

      <View>
        <Text style = {evacuationStyles.content}>4.Check to see if all of the house work is finished </Text>
        <Text style = {evacuationStyles.quote}>Unplug any electronic applications, make sure that AC and heater are turned off, water must be turned off as well, etc. In other words, diable everything in the house temporarily.  {'\n'} {'\n'}  </Text> 

      </View>

      <View>
        <Text style = {evacuationStyles.content}>5.Start your journey </Text>
        <Text style = {evacuationStyles.quote}>You can either travel to your frind/relative house or live at a hotel. Click on the button to learn more on navigation routes {'\n'} {'\n'}  </Text> 

      </View>

    </ScrollView>
      </View>
      
    );
  }

  const evacuationStyles = StyleSheet.create({
    bigTitle: {
      flex: -4,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: 0,
      fontFamily: "Times New Roman",
      color: "#4169e1",
      left: 150,
      bottom: -20,
  },
  content: {
    flex: -4,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 0,
    fontFamily: "Times New Roman",
    color: "black",
    left: 45,
    bottom: -40,
},
  quote: {
    flex: -4,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 23,
    marginTop: 0,
    fontFamily: "Times New Roman",
    color: "black",
    left: 5,
    bottom: -60,
  },
  })
 
  
export default EvacuationScreen;