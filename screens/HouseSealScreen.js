//1. Import react native componenets and libraries
import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native'

//2. Create a function for home to seal
function HouseSealScreen({ navigation }) {
 
    return (
      <View>
      <ScrollView>
        <View>
            <Text style = {HouseSealStyles.bigTitle}>STEPS TO PROTECT YOUR HOME FROM POTENTIAL DAMAGE</Text>
            <Text style = {HouseSealStyles.content}>1. Insurance Policy</Text>
        <Image
             source={require('./assets/sImage1.png')}
             style={HouseSealStyles.ImageIconStyle2}
            /> 
        <Text style = {HouseSealStyles.quorw}>If your home gets destroyed due to the storm despite following the measures, the government will pay for the damages. Track all of your possesions which include furniture, beds, sculptures, etc. that you plan on leaving at home. Jot down their approximate costs so that refund could be provided in considerable situations. {'\n'} {'\n'}  </Text> 
      </View>

      <View>
        <Text style = {HouseSealStyles.content}>2. Roof-Sealing</Text>
        <Image
             source={require('./assets/sImage2.png')}
             style={HouseSealStyles.ImageIconStyle2}
            /> 
        <Text style = {HouseSealStyles.quorw}>Check to see that no tiles of the roof are missing. If you forget to do this, water will enter through the roofing and go into your home. If there are damages on roofing, make sure to get it fixed by adding waterproof layers. {'\n'} {'\n'}</Text> 
      </View>

      <View>
        <Text style = {HouseSealStyles.content}>3. Porches Removal</Text>
        <Image
             source={require('./assets/sImage3.png')}
             style={HouseSealStyles.ImageIconStyle2}
            /> 
        <Text style = {HouseSealStyles.quorw}>Remove the porches or anything else that you can take off from the building. If the component remains attached, it will trigger the collapsion of the building. {'\n'} {'\n'} </Text> 
      </View>

      <View>
      <Text style = {HouseSealStyles.content}>4. Sealing Windows and Doors</Text>
        <Image
             source={require('./assets/sImage4.png')}
             style={HouseSealStyles.ImageIconStyle2}
            /> 
        <Text style = {HouseSealStyles.quorw}>Make sure to seal all of the windows and doors with hammered plywoods. This includes your garage. In your basement, add sealment so that water doesn't flood that region. This step is the most crucial as this gives the main door for the water to come in. If you require assistance, ask neighbors or call our service. {'\n'} {'\n'} </Text> 
      </View>

      <View>
      <Text style = {HouseSealStyles.content}>5. Cover Holes/Gaps</Text>
        <Image
             source={require('./assets/sImage5.png')}
             style={HouseSealStyles.ImageIconStyle2}
            /> 
        <Text style = {HouseSealStyles.quorw}> Cover the holes using materials found at home improvement stores as this will also prevent the water from entering the foundation of the house. {'\n'} {'\n'} </Text> 
      </View>

      <View>
      <Text style = {HouseSealStyles.content}>6. Lawn Clean-Up</Text>
        <Image
             source={require('./assets/sImage6.png')}
             style={HouseSealStyles.ImageIconStyle2}
            /> 
        <Text style = {HouseSealStyles.quorw}> Make sure to clean the lawn and remove all plants. Most importantly, remove the trees and tall plants as they might fall and cause damage. You may take it with you if it is precious or store it in a yard waste section. {'\n'} {'\n'} </Text> 
        <Text style = {breakfasHouseSealStylestStyles.quorw}>Click here to read more(source): https://www.cbsnews.com/media/10-ways-to-prepare-your-home-for-hurricane-season/</Text>
      </View>
      
      </ScrollView>
      </View>
      
    );
  }

  //3. Write the styles for these features
  const breakfastStyles = StyleSheet.create({
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
  quorw: {
    flex: -4,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 0,
    fontFamily: "Times New Roman",
    color: "black",
    left: 5,
    bottom: -80,
  },
  
  ImageIconStyle2: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 800,
    bottom: -60,
  },
  
  })
 
  


export default HouseSealScreen;