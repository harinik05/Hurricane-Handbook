//1. Import components and elements from react-native library
import React, { Component } from 'react'
import { Image, View, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native'


//2. Create a function for materials screen
function MaterialsScreen({ navigation }) {
    return (
      <View>
      <ScrollView>
        <View>
            <Image
            source={require('./assets/titlePage1.png')}   
            style = {materialStyles.holder}
            />
        </View>
      
        <TouchableOpacity
            style={materialStyles.subButton1}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/Fiji-Natural-Artesian-Water-Bottles/dp/B07BPTQSX6/ref=sr_1_1_sspa?dchild=1&keywords=water&qid=1596307509&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSU5NM05BRE8yR0lGJmVuY3J5cHRlZElkPUEwNjk5NDg5MVBKTUFSMkFIM0MzMSZlbmNyeXB0ZWRBZElkPUEwMTg4MzczMjEyS0tHMDBLUVNWRiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=')}}
        >
        <Image
            source={require('./assets/mButton1.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>
      
        <TouchableOpacity
            style={materialStyles.subButton2}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/KD-Kraft-Dinner-Snack-Cups/dp/B06XR9DKFY/ref=sr_1_5?crid=GZ246T7W5BN6&dchild=1&keywords=non+perishable+food&qid=1596339598&sprefix=non-perisha%2Caps%2C213&sr=8-5')}}
        >
        <Image
            source={require('./assets/mButton2.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={materialStyles.subButton3}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/Tactical-Flashlight-Wowlite-Ultra-Bright/dp/B07V3C24YK/ref=sr_1_8?dchild=1&keywords=flashlight&qid=1596339658&sr=8-8')}}
        >
        <Image
            source={require('./assets/mButton3.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={materialStyles.subButton4}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/Upgraded-Version-RunningSnail-Emergency-Flashlight/dp/B01MFCFKG5/ref=sr_1_2_sspa?crid=1QV40IYW1NS5I&dchild=1&keywords=hand+crank+radio&qid=1596339729&sprefix=handcrank+radio%2Caps%2C239&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSUFYNkdVVTk0NUlIJmVuY3J5cHRlZElkPUEwNTA3MDAyMzdZUlkzUDVPSTJFViZlbmNyeXB0ZWRBZElkPUEwOTYxODIzMjFZMEpaV09OTlRLUyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=')}}
        >
        <Image
            source={require('./assets/mButton4.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={materialStyles.subButton5}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/First-Aid-Kit-120-piece-30-Piece/dp/B07CK4PRVL/ref=sr_1_5?crid=3U0F4ZLCPYP2L&dchild=1&keywords=first+aid+kit&qid=1596339861&sprefix=first+a%2Caps%2C175&sr=8-5')}}
        >
        <Image
            source={require('./assets/mButton5.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={materialStyles.subButton6}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/Weekly-Pill-Organizer-Times-Day/dp/B07WD6V98G/ref=sr_1_1_sspa?dchild=1&keywords=medications&qid=1596340104&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFMUZFSjUzWk1RM0omZW5jcnlwdGVkSWQ9QTA4NjUxMDcxTzhOSkM1MDlWUDg4JmVuY3J5cHRlZEFkSWQ9QTA5ODQ2MDBET1hTUzc0TEhXR1gmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl')}}
        >
        <Image
            source={require('./assets/mButton6.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={materialStyles.subButton7}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/Solocare-Aqua-Contact-Solution-360-Milliliter/dp/B00P69XAWK/ref=sr_1_1?dchild=1&keywords=contact+lenses&qid=1596340196&sr=8-1')}}
        >
        <Image
            source={require('./assets/mButton7.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={materialStyles.subButton8}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/Convenience-Kits-Womens-Pantene-Kit/dp/B01N3777ZT/ref=sr_1_14?dchild=1&keywords=travel+items+hygiene&qid=1596340335&sr=8-14')}}
        >
        <Image
            source={require('./assets/mButton8.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={materialStyles.subButton9}
            onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/FWG-Waterproof-3-Pieces-Ultra-Lite-XXX-Large/dp/B07VT2ZQQ2/ref=sr_1_2_sspa?dchild=1&keywords=rain+gear&qid=1596340499&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyT1VWRVNZTUhZWlowJmVuY3J5cHRlZElkPUEwOTAzMzU1MjZaTFpLNkVLWEEyMyZlbmNyeXB0ZWRBZElkPUEwMjg3MzgwMUpEQkNNU1ZRSFEzTiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=')}}
        >
        <Image
            source={require('./assets/mButton9.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>

        <TouchableOpacity
            style={materialStyles.subButton10}
             onPress={ ()=>{ Linking.openURL('https://www.amazon.ca/Purina-SmartBlend-Aliment-pour-chien/dp/B00KACLOG2/ref=sr_1_1_sspa?dchild=1&keywords=dog+food&qid=1596340565&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMTRDQ1JVTVRMN0FDJmVuY3J5cHRlZElkPUEwODA5Njg4TENFTEZTSUIxTEEmZW5jcnlwdGVkQWRJZD1BMDk2MzIzNTFGU0JPS080Sk5FSUomd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl')}}
        >
        <Image
            source={require('./assets/mButton10.png')}
            style={materialStyles.ImageIconStyle2}
        />
        </TouchableOpacity>
   </ScrollView>
    </View>
    );
  }

  const materialStyles = StyleSheet.create({
  holder: {
    padding: 10,
    margin: 65,
    height: 180,
    width: 780,
    resizeMode: 'stretch',
    alignItems: "center",
    bottom: 62.5,
    left: -70,
  },
  subButton1:{
    //borderWidth:.5,
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       bottom:100,
      left:40,
  },
  ImageIconStyle2: {
    padding: 10,
    margin: 5,
    height: 300,
    width: 300,
  },
  subButton2:{
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       bottom:400,
      left:420,
  },
  subButton3:{
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       bottom:350,
      left:40,
  },
  subButton4:{
    
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       bottom:650,
      left:420,
  },

  subButton5:{
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       bottom:600,
      left:40,
  },

  subButton6:{
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       borderRadius:50,
       bottom:900,
      left:420,
  },

  subButton7:{
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       borderRadius:50,
       bottom:845,
      left:40,
  },

  subButton8:{
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       borderRadius:50,
       bottom:1145,
      left:418,
  },

  subButton9:{
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       bottom:1085,
      left:40,
  },

  subButton10:{
       borderColor:'black',
       alignItems:'center',
       justifyContent:'center',
       width:300,
       height:300,
       bottom:1385,
      left:415,
  },
 
  })

  export default MaterialsScreen;
  