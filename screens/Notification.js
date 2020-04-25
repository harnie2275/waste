import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    return (
      <View style={styles.container}>
       <View style={{ alignItems: "center", marginTop: 50 }}> 
        <Image source={require('../assets/1.png')} resideMode= "contain" style={{ width: "95%", height: 250,  }} />
        <Text style={{fontWeight: "700", fontSize: 20, color: "dimgrey", marginTop: 50}}>No Notification yet!</Text>
       </View>
    </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})
