import React, { Component } from 'react';
import {
    View, 
    Text,
    AppRegistry,
    Dimensions,
    Image,
    PixelRatio,
    ScrollView,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView
 } from 'react-native';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


import { Entypo, Ionicons, MaterialCommunityIcons, Feather, AntDesign,  } from '@expo/vector-icons';
import Constant from 'expo-constants';
import * as Permissions from 'expo-permissions';



export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    
        this.state ={
          // number: "",
          // address: "",
          // displayName: null,
          // email: "",
          // user: ""

        }
        this.getPhotoPermission();
      }
    state = {
        photo: null
    }

    getPhotoPermission = async () => {
        if (Constant.platform.ios) {
          const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
          if (status !="granted"){
            alert("Blueko needs permission to access your camera roll")
          }
        }
    }
    

    componentDidMount() {
        const {email, displayName, address} = firebase.auth().currentUser

        this.setState({email, displayName, address });

    }

    signOutUser = () => {
        firebase.auth().signOut();
    }
    
//    saveChange = () => {
//      const {email, displayName, address, number} = this.state//

//      firebase
//        .auth().updateCurrentUser(this.state.email)
//        .then(userCrendentials =>{
//          return userCrendentials.user.updateProfile({
//              displayName: this.state.displayName,
//              email: this.state.email,
//              address: this.state.address,
//              number: this.state.number,
//          })
//      }) 
//      .catch(error =>  this.setState({errorMessage: error.message}))
//    }

    render() {
        return (

          <View style={{ flex: 1, backgroundColor: "black"}}>
            <ScrollView style={{ height: "90%",}}>
            <View style={{ marginTop: 30, marginLeft: 15,}}  >
                <Text style={{ fontWeight: "bold", fontSize: 35, color: "#fff" }}> Profile</Text>
            </View>
            <TouchableOpacity style={{ marginHorizontal: 10, marginTop: 30, height: 60,  justifyContent: "center", borderColor: "lightgrey", borderBottomWidth: 0.5, }} onPress={() => this.props.navigation.navigate('Profile')} >
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
              <TouchableOpacity style={{ width: 168, height: 100, backgroundColor: "#6948f4", borderRadius: 10, justifyContent: "center", }} onPress={() => this.props.navigation.navigate('About')}  >
                <View>
                <Image source={require('../assets/about.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} resizeMode="contain" />
                <Text style={{ fontWeight: "700", marginHorizontal: 10, fontSize: 17, marginTop: 10, color: "white" }}>
                  About Us
                </Text>
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 168, height: 100, backgroundColor: "#6948f4", borderRadius: 10, justifyContent: "center" }} onPress={() => this.props.navigation.navigate('WasteInfo')}  >
              <View>
                <Image source={require('../assets/info.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} resizeMode="contain" />
                <Text style={{ fontWeight: "700", marginHorizontal: 10, fontSize: 17, marginTop: 10, color: "white" }}>
                  Collection Info
                </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop: 10 }}>
            <TouchableOpacity style={{ width: 168, height: 100, backgroundColor: "#6948f4", borderRadius: 10, justifyContent: "center" }} onPress={() => this.props.navigation.navigate('Support')} >
              <View>
                <Image source={require('../assets/chat.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} resizeMode="contain" />
                <Text style={{ fontWeight: "700", marginHorizontal: 10, fontSize: 17, marginTop: 10, color: "white"}}>
                  Support
                </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 168, height: 100, backgroundColor: "#6948f4", borderRadius: 10, justifyContent: "center" }}  onPress={() => this.props.navigation.navigate('Web')} >
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: "white",
    },
    
});
