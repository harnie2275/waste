import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginTop: 30 }}  >
            <Image source={require('../assets/1.png')} resideMode= "contain" style={{ width: undefined, height: 250,  }} />
            <Text style={{ marginTop: 45, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}> 
            What happens to the materials you place for recycling collection? They are picked up and delivered to a sorting facility, where they are dumped onto a conveyer belt so they can be separated by type of material - metal cans, plastic bottles, paper, etc.
            </Text>
            </View>
            <View style={{ marginTop: 40 }}>
            <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
              What happens t recyclable materials that have been placed inside a plastic bag? Well, the conveyer belt moves very fast, so there's no time to investigare what's inside it. The entire bag is rejected and sent to landfill.The materials that you put in your bin and were  collected for recycling and put on the sorting line - all that effort, is for nothing. Worse still, there's the additional cost to truck it to the landfill and pay the disposal fees.
            </Text>
            </View>
            <View style={{ marginTop: 40 }}>
            <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
            Hard to Imagine, it gets worse.
            </Text>
            </View>
            <View style={{ marginTop: 40 }}>
            <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
              Plastic bags and high-speed conveyers don't play well together. The bags jam the processing equipment, which creates work stoppages - this happens daily. And by work stoppages, we mean the whole recycling facility must shut down.
            </Text>
            </View>
            <View style={{ marginTop: 40 }}>
            <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
              Hard to Imagine, it gets worse.
            </Text>
            </View>
          
            <View style={{ marginTop: 40 }}>
            <Text style={{ marginHorizontal: 30, fontWeight: "600", fontSize: 18 }}>
              Now you see why bagging your recyclables is just about the worst thing you can do. so please, dont put bagged recyclables in your recycling container.
            </Text>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "white"
    
  },
  header: {
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    shadowColor: "grey",
    shadowOffset: {height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.2,
    zIndex: 10,
    flexDirection: "row"
  },
})
