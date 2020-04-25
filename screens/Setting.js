import 'react-native-gesture-handler/Swipeable';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';


export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const {email, displayName, displayAddress} = firebase.auth().currentUser

    this.setState({email, displayName, displayAddress});
}

  signOutUser = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "black"}}>
            <ScrollView style={{ height: "90%",}}>
            <View style={{ marginTop: 30, marginLeft: 15,}}  >
                <Text style={{ fontWeight: "bold", fontSize: 35, color: "#fff" }}> Settings</Text>
            </View>
            <TouchableOpacity style={{ marginHorizontal: 10, marginTop: 30, height: 60,  justifyContent: "center", borderColor: "lightgrey", borderBottomWidth: 0.5, }} >
            <View style={{ flexDirection: "row",  }}>
              <View style={{ height: 50, width: 50, borderRadius: 25, alignItems: "center", justifyContent: "center", backgroundColor: "black" }}>
              <Feather name="user"  size={24} color="white" /> 
              </View>
              <View style={{ // marginTop: 9
               }}>
              <Text style={{fontWeight: "500", fontSize: 20, marginLeft: 10, textTransform: "capitalize", color: "dimgrey"}}>{this.state.displayName}</Text>
              <Text style={{fontWeight: "600", fontSize: 15, marginLeft: 10, color: "dimgrey"}}>see and edit profile</Text>
              </View>               
          </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop: 20 }}>
              <TouchableOpacity style={{ width: "49%", height: 100, backgroundColor: "#6948f4", borderRadius: 10, justifyContent: "center", }} onPress={() => this.props.navigation.navigate('About')}  >
                <View>
                <Image source={require('../assets/about.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} resizeMode="contain" />
                <Text style={{ fontWeight: "700", marginHorizontal: 10, fontSize: 17, marginTop: 10, color: "white" }}>
                  About Us
                </Text>
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity style={{ width: "49%", height: 100, backgroundColor: "#6948f4", borderRadius: 10, justifyContent: "center" }} onPress={() => this.props.navigation.navigate('WasteInfo')}  >
              <View>
                <Image source={require('../assets/info.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} resizeMode="contain" />
                <Text style={{ fontWeight: "700", marginHorizontal: 10, fontSize: 17, marginTop: 10, color: "white" }}>
                  Collection Info
                </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop: 10 }}>
            <TouchableOpacity style={{ width: "49%", height: 100, backgroundColor: "#6948f4", borderRadius: 10, justifyContent: "center" }} onPress={() => this.props.navigation.navigate('Support')} >
              <View>
                <Image source={require('../assets/chat.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} resizeMode="contain" />
                <Text style={{ fontWeight: "700", marginHorizontal: 10, fontSize: 17, marginTop: 10, color: "white"}}>
                  Support
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: "49%", height: 100, backgroundColor: "#6948f4", borderRadius: 10, justifyContent: "center" }}  onPress={() => this.props.navigation.navigate('Web')} >
              <View>
                <Image source={require('../assets/news.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} resizeMode="contain" />
                <Text style={{ fontWeight: "700", marginHorizontal: 10, fontSize: 17, marginTop: 10, color: "white" }}>
                  News Update
                </Text>
                </View>
              </TouchableOpacity>
            </View>
           
            </ScrollView>
            <View style={{height: "10%", backgroundColor: "#6948f4", marginHorizontal: 10, borderRadius: 10, height: 50, justifyContent: "center", marginBottom: 10}}>
            <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={this.signOutUser}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{fontWeight: "500", fontSize: 17, color: "white"}}>LogOut</Text>
                <AntDesign name="logout"  size={20} color="#fff" />        
            </View>
            </TouchableOpacity>
            </View>
        </View>
      

    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue"
  }
})
