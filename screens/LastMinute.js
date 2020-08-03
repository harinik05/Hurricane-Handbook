//1. Import all library features from react-native
import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native'

//2. Create a function for lastMinuteScreen
function LastMinuteScreen({ navigation }) {
    return (
      <View>
      <ScrollView>
        <View>
            <Text style = {lastStyles.bigTitle}>TOO LATE?</Text>
        </View>

        <View>
            <Image
                source={require('./assets/holder.png')}
                style = {lastStyles.holder}
        />
        </View>
      
        <View>
            <Text style = {lastStyles.content}>
                1. Unplug all the appliances{'\n'}
                2. Take variables{'\n'}
                3. Follow the safest route directed by workers{'\n'}
            </Text>
        </View>
  
    </ScrollView>
    </View>
    );
  }

  //3. Modified Styles
  const lastStyles = StyleSheet.create({
    bigTitle: {
      flex: -4,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 30,
      marginTop: 0,
      fontFamily: "Times New Roman",
      color: "#b22222",
      left: 100,
      bottom: -30,
  },
  holder: {
    padding: 2,
    margin: -23,
    height: 200,
    width: 400,
    resizeMode: 'stretch',
    alignItems: "center",
    bottom: 62.5,
  },
  content:{
    flex: -4,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    marginTop: 0,
    fontFamily: "Times New Roman",
    color: "black",
  },
  })


  export default LastMinuteScreen;
  
  
  