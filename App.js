import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, } from 'react-native';
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import * as Location from "expo-location";
import { Marker } from 'react-native-maps';
import MapView, { Polyline } from 'react-native-maps';
import { View, Switch, } from 'react-native';
import React, { useState } from 'react';




// componentDidMount = async () => {
//   await Font.loadAsync({
//     'myfont': require('./nazwafonta.ttf'), // Uwaga: proszę w nazwie fonta nie używać dużych liter
//   });
//   this.setState({ fontloaded: true })
// }

const App = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  <View style={{ flex: 1 }}>
    <MapView style={{ flex: 0.9 }}

      initialRegion={{
        latitude: 50.1114,
        longitude: 20.11122,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }}
    >
      <Marker
        coordinate={{
          latitude: 50.1114,
          longitude: 20.11122,
        }}
        title={"pos"}
        description={"opis"}
      />
      <Polyline
        coordinates={[
          { latitude: 50.1114, longitude: 20.11122 },
          { latitude: 50.1113, longitude: 20.11134 },
          { latitude: 50.1112, longitude: 20.11132 },
          { latitude: 50.1111, longitude: 20.11142 },
          { latitude: 50.1110, longitude: 20.11132 },
          { latitude: 50.1106, longitude: 20.11133 },
        ]}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={[
          '#7F0000',
          '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          '#B24112',
          '#E5845C',
          '#238C23',
          '#7F0000',
        ]}
        strokeWidth={6}
      />
    </MapView>
    {/* <Switch style={{ flex: 0.1 }}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    /> */}
  </View>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;