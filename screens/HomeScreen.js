//1. Import all the components and library feature from react-native library
import React, { Component } from 'react'
import { Image, View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'

//2. Create a function for homescreen only
function HomeScreen({ navigation }) {
    return (
       <View> 

          <View style={homeStyles.container}>       
                                                        
          <Image
            style={homeStyles.tinyLogo}
            source={require('./assets/CoverImage.png')}
          />

          </View>


          <View style={homeStyles.container1}>

          <ScrollView horizontal={true}>
            <Text style={homeStyles.headline}>Latest News Update: Great Hurricane of 1780 announced by government.~</Text>
            <Text style={homeStyles.headline}>Follow the government protocols throught the app Hurricane Handbook.</Text>
            <Text style={homeStyles.headline}>We recommend all of you to evacuate with your valuable properties asap.</Text>          
          </ScrollView>

          </View>

     
          <View>
            <TouchableOpacity
              style={homeStyles.button1}
              onPress={() => navigation.navigate('Materials')}
             
            >  

            <Image
             source={require('./assets/button1Picture.png')}
             style={homeStyles.ImageIconStyle}
            /> 
            </TouchableOpacity>

  
            <TouchableOpacity
               style={homeStyles.button2}
               onPress={() => navigation.navigate('House-Sealing')}
            >

            <Image
             source={require('./assets/button2Picture.png')}
             style={homeStyles.ImageIconStyle}
            />
            </TouchableOpacity>


            <TouchableOpacity
              style={homeStyles.button3}
              onPress={() => navigation.navigate('Evacuation')}
            >

            <Image
              source={require('./assets/button3Picture.png')}
              style={homeStyles.ImageIconStyle}
            />
            </TouchableOpacity>


            <TouchableOpacity
              style={homeStyles.button4}
              onPress={() => navigation.navigate('Late')}
            >

            <Image
              source={require('./assets/button6Picture.png')}
              style={homeStyles.ImageIconStyle}
            />
            </TouchableOpacity>

  
            <TouchableOpacity
              style={homeStyles.button5}
              onPress={() => navigation.navigate('Books')}
            >

            <Image
              source={require('./assets/button5Picture.png')}
              style={homeStyles.ImageIconStyle}
            />
            </TouchableOpacity>


            <TouchableOpacity
              style={homeStyles.button6}
              onPress={() => navigation.navigate('ViewMap')}
            >

            <Image
              source={require('./assets/button4Picture.png')}
              style={homeStyles.ImageIconStyle}
            />
            </TouchableOpacity>
    
          </View>
    
    
       </View>
      
      );

}

//3. Add style properties to homescreen
const homeStyles = StyleSheet.create({

      container: {
        paddingTop: 0,
        backgroundColor: 'grey',
      },

      tinyLogo: {
        width: 800,
        height: 520,
      },

      container1: {
        paddingTop: 0,
      },

      headline: {
        fontWeight: 'bold',
        fontSize: 11.5,
        marginTop: 0,
        width: 380,
        height: 13,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Times New Roman",
        color: "white",
      },

      button1:{
        borderWidth:1.5,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        width:200,
        height:200,
        bottom:-10,
        left:25,
      },

      button2:{
        borderWidth:1.5,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
        bottom:135,
        left:340,
      },

      button3:{
        borderWidth:1.5,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
        bottom:225,
        left:600,
      },
    
      button4:{
        borderWidth:1.5,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
        bottom:100,
        left:600,
      },

      button5:{
        borderWidth:1.5,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
        bottom:190,
        left:340,
      },

      button6:{
        borderWidth:1.5,
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
        bottom:280,
        left:80,
      },

      ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 200,
        width: 200,
        resizeMode: 'stretch',
      },
})

export default HomeScreen;