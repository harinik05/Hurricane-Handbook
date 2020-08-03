//1. Import all react componenets and libraries from react-native
import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native'

//2. Create a function for readscreen and keep a record of all books in different categories
function ReadScreen({ navigation }) {
 
    return (
      <View>
      <ScrollView>
      <View>
        <Text style = {readStyles.bigTitle}>READ IN SHELTER DURING THE HURRICANE--INSTALL SORA</Text>
        <Text style = {readStyles.content}>Kids's Corner </Text>
        <Image
             source={require('./assets/kBook1.png')}
             style={readStyles.kBook1}
            /> 
        <Image
             source={require('./assets/kBook2.png')}
             style={readStyles.kBook2}
            /> 
         <Image
             source={require('./assets/kBook3.png')}
             style={readStyles.kBook3}
            /> 
        
        <Text style = {readStyles.content2}>Teen's Corner</Text>
        <Image
             source={require('./assets/tBook1.png')}
             style={readStyles.tBook1}
            /> 
        <Image
             source={require('./assets/tBook2.png')}
             style={readStyles.tBook2}
            /> 
         <Image
             source={require('./assets/tBook3.png')}
             style={readStyles.tBook3}
            /> 

        <Text style = {readStyles.content3}>Adult's Corner</Text>
        <Image
             source={require('./assets/aBook1.png')}
             style={readStyles.aBook1}
            /> 
        <Image
             source={require('./assets/aBook2.png')}
             style={readStyles.aBook2}
            /> 
         <Image
             source={require('./assets/aBook3.png')}
             style={readStyles.aBook3}
            />         
      </View>
      </ScrollView>

      </View>
      
    );
  }

  //3. Write the styles parellely as you are working on the features
  const readStyles = StyleSheet.create({
    bigTitle: {
      flex: -4,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 0,
      fontFamily: "Times New Roman",
      color: "#4169e1",
      left: 3,
      bottom: -20,
  },

  content: {
    flex: -4,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 0,
    fontFamily: "Times New Roman",
    color: "black",
    left: 45,
    bottom: -40,
},

content2: {
    flex: -4,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 0,
    fontFamily: "Times New Roman",
    color: "black",
    left: 45,
    bottom: 530,
},

content3: {
    flex: -4,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 0,
    fontFamily: "Times New Roman",
    color: "black",
    left: 45,
    bottom: 1100,
},
 
  kBook1: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: -60,
  },

  kBook2: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: 250,
    left:280,
  },

  kBook3: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: 560,
    left:543,
  },

  tBook1: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: 520,
  },

  tBook2: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: 825,
    left:280,
  },

  tBook3: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: 1135,
    left:543,
  },

  aBook1: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: 1080,
  },

  aBook2: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: 1390,
    left:280,
  },

  aBook3: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 215,
    bottom: 1700,
    left:543,
  },
 
  })
 
  


export default ReadScreen;