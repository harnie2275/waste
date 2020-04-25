import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, Platform, TextInput } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Constant from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';


export default class ReportPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
      number: "",
        
    };
          this._getLocationAsync();
   
  };







  componentDidMount() {
    const {email, displayName, displayAddress} = firebase.auth().currentUser

    this.setState({email, displayName, displayAddress});

    this.watchId = navigator.geolocation.watchPosition((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }, (error) => {this.setState({error: error.message})},{
      enableHighAccuracy: false, timeout: 1, maximumAge: 1, distanceFilter: 1
    })

  } 

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
  };
  
  writeuserdata( displayName, latitude, longitude, number) {
    firebase.database().ref('Report/').push({
      displayName: this.state.displayName,
      latitude,
      longitude,
      number
      
    }).then((data) =>{
      console.log('data', data)
      Alert.alert('Thank You For Reporting',
      'Successful')
      this.props.navigation.goBack()
    })
      
    .catch((error) => {
      console.log('error', error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginHorizontal: 20, marginTop:30  }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <View style={{width:"48%",}}>
            <View style={{ flexDirection: "row",  }}>
            <MaterialCommunityIcons name="account" size={24} color="grey"  />
            <Text style={{  fontSize: 15, textTransform: "uppercase", marginTop: 10 }}> {this.state.displayName} </Text>
            </View>
            </View>
            <View style={{width:"48%",}}>
            <View style={{ flexDirection: "row"}}>
            <TouchableOpacity onPress={() =>{this.getData()}}>
              <Entypo name="location" size={24} color="grey"  />
            </TouchableOpacity>
            <Text style={{ fontSize: 15, textTransform: "uppercase", marginTop: 10 }}> {this.state.latitude}, {this.state.longitude}</Text>
            </View>
            </View>
          </View>
          <TextInput style={styles.input}
                    onChangeText={number => this.setState({ number })}
                    value= {this.state.number}
                    autoCapitalize= "none"
                    placeholder="070124585"></TextInput>
          
        </View>
        <TouchableOpacity style={{ alignItems: "center", marginHorizontal: 60, backgroundColor: "black", height: 50, borderRadius: 20, alignItems: "center", justifyContent: "center" }} onPress={() => this.writeuserdata(this.state.displayName, this.state.latitude, this.state.longitude)}>
          <TouchableOpacity style={{  }} onPress={() => this.writeuserdata(this.state.displayName, this.state.latitude, this.state.longitude, this.state.number)}>
          <Text style={{ color: "white", fontSize: 16, fontWeight:"bold" }}>
            Send
          </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})
