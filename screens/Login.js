import 'react-native-gesture-handler/Swipeable';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, PixelRatio, KeyboardAvoidingView, ScrollView } from 'react-native';

import * as firebase from 'firebase';


export default class Login extends React.Component {
   
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin= () => {
        const {email, password} = this.state

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (user) {
            
        }) 
        .catch(error => this.setState({errorMessage: error.message}))
    }


  render() {
    return (
        <ScrollView style={{ marginTop: 100, flex: 1 }}>
        <View style= {{}}>
            <KeyboardAvoidingView behavior="position">
           
            <Image // source={require('../assets/logo.png')} style={{marginTop: 50, width: PixelRatio.getPixelSizeForLayoutSize(70), height: PixelRatio.getPixelSizeForLayoutSize(20)}}
            />
            <Text style={{ color: "#202020",  fontSize: 20, fontWeight: "bold", marginHorizontal: 20 }}>Login</Text>
            <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>

            <KeyboardAvoidingView behavior="position" style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Email</Text>
                    <TextInput style={styles.input}
                    onChangeText={email => this.setState({ email })}
                    value= {this.state.email}
                    autoCapitalize= "none"
                    placeholder= "example@mail.com"></TextInput>
                </View>

                <View style={{ marginTop: 32 }}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input}
                    onChangeText={password => this.setState({ password })}
                    value= {this.state.password}
                    secureTextEntry
                    autoCapitalize= "none"
                    placeholder= "Your Password"></TextInput>
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={{ fontWeight: "600", color: "white" }}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: "center", marginTop: 32,}} onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{color: "#414959", fontSize: 13}}>
                    New to Blueko? <Text style={{fontWeight: "600", color: "#202020"}}>SIGNUP </Text>
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
        justifyContent: "center"
    },
    notice: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    errorMessage: {
        height: 72,
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
        marginHorizontal: 25,
    },
    inputTitle: {
        color: "#202020",
        fontSize: 10,
        textTransform: "uppercase",
        fontWeight: "600",
        fontSize: 12
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        height: 60,
        fontSize: 15,
        color: "#161f3d",
        marginTop: 10,
        shadowOpacity: 0.3, 
        shadowOffset: {height: 3}, 
        shadowRadius: 3,
        shadowColor: "black"
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
        shadowRadius: 1,
    }
})