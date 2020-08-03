//1. Import all the required libraries and components from reat-native
import React from 'react';
import MapView, {Marker} from 'react-native-maps';


//2. Use the MapView and MapView.Marke to add a coordinate on the graph
function MapScreen({ navigation }) {
  return (
    
    <MapView
        style={{ flex: 1 }}
        initialRegion={{
        latitude: 32.1656,
        longitude: -82.9001,
        latitudeDelta: 5,
        longitudeDelta: 5,
    }}
    >

   <MapView.Marker
        coordinate={{latitude: 32,
        longitude: -81,}}
        title={"The Westin Savannah Harbor Golf Resort & Spa"}
        description={"$159"}
    />

    <MapView.Marker
        coordinate={{latitude: 33,
        longitude: -84,}}
        title={"Best Western Riverside Inn"}
        description={"$82"}
    />

    <MapView.Marker
        coordinate={{latitude: 31.69,
        longitude: -82.2,}}
        title={"Masters Inn"}
        description={"$67"}
    />

    <MapView.Marker
        coordinate={{latitude: 33.8,
        longitude: -84,}}
        title={"Royal Inn"}
        description={"$67"}
    />

    <MapView.Marker
        coordinate={{latitude: 33.8,
        longitude: -84,}}
        title={"Stay Express Inn & Suites Union City Near Atlanta Airport"}
        description={"$48"}
    />

    <MapView.Marker
        coordinate={{latitude: 31.57,
        longitude: -84.15,}}
        title={"Hilton Garden Inn Albany"}
        description={"$140"}
    />

  </MapView>
    
  );
  
}




export default MapScreen;