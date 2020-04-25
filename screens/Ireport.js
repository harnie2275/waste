import 'react-native-gesture-handler/Swipeable';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Modal, Image, Linking, Button, TextInput } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constant from 'expo-constants';
import { Camera } from 'expo';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';






export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      region: null,
      showBot: false,
      button: true,
    }
    this._getLocationAsync();
 
  }


  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    let  region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.095,
      longitudeDelta: 0.01,
    }
    this.setState({ region: region });
  }

  dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${07012170567}';
    }
    else {
      phoneNumber = 'telprompt:${07012170567}';
    }
 
    Linking.openURL(phoneNumber);
  };

 
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} initialRegion={this.state.region} showsUserLocation={true} showsCompass={true} backgroundColor="black" mapStyle={{color: "black"}} >
        </MapView>
        <View style={{ 
         position: "absolute", 
         bottom: -10, height:"25%", width: "100%", 
        shadowColor: "dimgrey",
         backgroundColor: "white",
         shadowOffset: {height: -3},
         shadowOpacity: 0.5,
         shadowRadius: 4,
         borderRadius: 10, 
         backgroundColor: "black"
         }}>
           <View style={{ marginHorizontal: 25, marginTop: 40,}}>
            <Text style={{ fontSize: 12, color: "white" }}>Nice to see You!</Text>
            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}> Area stocked with waste?<Text style={{ fontSize: 12, color: "dimgrey", fontWeight: "100" }}> Report Here</Text></Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('post')}>
              <Image source={require('../assets/report-icon.png')} style={{ height: 70, width: 70, alignSelf: "flex-end" }}/>
            </TouchableOpacity>
           </View>
       </View>
       <View style={{ 
         position: "absolute", 
         top: 90, right: 20, height:50, width: 45,  
         shadowOffset: {height: 1},
         shadowOpacity: 0.5,
         shadowRadius: 4,
         
         backgroundColor: "#bda1f7",
         flex: 1, alignItems: "center", justifyContent: "center",}}>
           
           <TouchableOpacity
           style={{ height:50, width: 45, justifyContent:"center", alignItems: "center" }}>
             <TouchableOpacity onPress={this.dialCall}>
             <Ionicons name="md-call" size={24} color="white" />
           </TouchableOpacity>
           </TouchableOpacity>
           
       </View>
       <View style={{ 
         position: "absolute", 
         top: 40, right: 20, height:45, width: 200,  
       
         backgroundColor: "black",
         justifyContent: "center",
         flexDirection: "row",
         flex: 1,   shadowOffset: {height: 1},
         shadowOpacity: 0.5,
         shadowRadius: 4,}} 
         onPress={() => this.props.navigation.navigate('ReportInfo')}
         >
           <View
           style={{ alignItems: "center",  justifyContent: "center" }}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('ReportInfo')} style={{ height:45, alignItems: "center",  justifyContent: "center" }}>
             <Text style={{ fontSize: 12, color: "lightgrey", fontWeight: "700" }}>How To Use the Report </Text>
           </TouchableOpacity>
           
           </View>
           <View style={{ alignItems: "center",  justifyContent: "center", marginLeft: 20,  }}><TouchableOpacity onPress={() => this.props.navigation.navigate('ReportInfo')} style={{ height:45, alignItems: "center",  justifyContent: "center" }}><MaterialCommunityIcons name="information-variant" size={24} color="lightgrey" /></TouchableOpacity></View>
           
       </View>
        
      
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  
  },
  modal: {
    height: Dimensions.get('window').height/1.5,
    width: "100%",
    borderRadius: 50,
    backgroundColor: "white",
    position: "relative",
    top: 250,
    right:0,
    left: 0,
    bottom: 10,
  
  },
  modalStyle: {
    flex: 1,
  }
});
