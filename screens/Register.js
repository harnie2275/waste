import 'react-native-gesture-handler/Swipeable';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, PixelRatio, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import UserPermissions from '../Utilities/UserPermissions';
import Fire from '../Utilities/Fire';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }



export default class Home extends Component {
  state = {
    user:{
      name: "",
      email: "",
      password: "",
      errorMessage: null,
      address: "",
      avatar: null,
      phone: "",
    }
  };

  handlePickAvatar = async () => {
    UserPermissions.getCameraPermission()

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [ 4, 4 ]
    })

    if (!result.cancelled) {
      this.setState({ user: { ...this.state.user, avatar: result.uri } });
    }
  }

  handleSignUp= () => {
    Fire.shared.createUser(this.state.user);
  }

render() {
  return (
  <ScrollView style={{ flex: 1 }}>
    <View style= {{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, }}> 
            <Text style={{ fontWeight: "900", fontSize: 14 }} > Create Account </Text>
        </View>
      <KeyboardAvoidingView behavior="padding">
      <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: "lightgrey", alignItems: "center", justifyContent: "center" }} onPress={this.handlePickAvatar}  >
          <Ionicons name="ios-add" size={40} color="white"  />
          <Image source={{ uri: this.state.user.avatar }} style={{ position: "absolute",  width: 100, height: 100, borderRadius: 50   }}  />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView behavior="position" style={styles.form}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ width:"48%", }}>
                <Text style={styles.inputTitle}>Full name</Text>
                <View style={styles.formInput}>
                    <TextInput style={styles.input}
                    onChangeText={name => this.setState({ user: { ...this.state.user, name  } })}
                    value= {this.state.user.name}
                    autoCapitalize= "words"
                    placeholder="Kiki Olumide Isimi"></TextInput>
                </View>
              </View>

              <View style={{ width:"48%", }}>
                <Text style={styles.inputTitle}>Email</Text>
                <View style={styles.formInput}>
                    <TextInput style={styles.input}
                    onChangeText={email => this.setState({ user: { ...this.state.user, email } })}
                    value= {this.state.user.email}
                    autoCapitalize= "none"
                    keyboardType="email-address"
                    placeholder="example@gmail.com"></TextInput>
                </View>
              </View>
          </View>


          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25 }}>
              <View style={{ width:"48%", }}>
                <Text style={styles.inputTitle}>Address</Text>
                <View style={styles.formInput}>
                    <TextInput style={styles.input}
                    onChangeText={address => this.setState({ user: { ...this.state.user, address  } })}
                    value= {this.state.user.address}
                    autoCapitalize= "words"
                    placeholder="3 Egba Street, Cement, Ikeja"></TextInput>
                </View>
              </View>

              <View style={{ width:"48%", }}>
                <Text style={styles.inputTitle}>Phone Number</Text>
                <View style={styles.formInput}>
                    <TextInput style={styles.input}
                    onChangeText={phone => this.setState({ user: { ...this.state.user, phone } })}
                    value= {this.state.user.phone}
                    autoCapitalize= "none"
                    keyboardType="phone-pad"
                    placeholder="07012170567"></TextInput>
                </View>
              </View>
          </View>

          <View style={{marginTop: 25  }}>
                <Text style={styles.inputTitle}>Password</Text>
                <View style={styles.formInput}>
                    <TextInput style={styles.input}
                    onChangeText={password => this.setState({ user: { ...this.state.user, password  } })}
                    value= {this.state.user.password}
                    autoCapitalize= "none"
                    secureTextEntry
                    placeholder="Your Password-8 character at least"></TextInput>
                </View>
          </View>
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={{ fontWeight: "bold", color: "white" }}>CREATE ACCOUNT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf: "center", marginTop: 32,}} onPress={() => this.props.navigation.navigate('Login')} >
          <Text style={{ fontSize: 13}}>
              Already have a Blueko Account? <Text style={{fontWeight: "600",}}>LOGIN</Text>
          </Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    </ScrollView>
    
  )
}
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        
    },
    notice: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
    },
    errorMessage: {
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        marginTop: 10,
    },
    error: {
        color: "#e9446a",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 10,
        marginTop: 30
    },
    inputTitle: {
        color: "#202020",
        fontSize: 10,
        textTransform: "capitalize",
        fontWeight: "300",
        fontSize: 10
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        height: 50,
        fontSize: 15,
        marginHorizontal: 15
    },
    button: {
        marginHorizontal: 50,
        backgroundColor: "#202020", 
        borderRadius: 6,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.3, 
        shadowOffset: {height: 3}, 
        shadowRadius: 7,
        shadowColor: "black"
    },
    back: {
        position: "absolute",
        top: 48,
        left: 9,
        width: 45,
        height: 35,
        borderRadius: 10,
        backgroundColor: "rgb(175,209,50)",
        alignItems: "center"
    },
    add: {
        alignItems: "center",
        marginTop: 30

    },
    formInput: {
        backgroundColor: "white",
                borderRadius: 5,
                height: 50,
                fontSize: 15,
                color: "#161f3d",
                marginTop: 4,
                shadowOpacity: 0.3, 
                shadowOffset: {height: 3}, 
                shadowRadius: 3,
                shadowColor: "black"
    }
})

