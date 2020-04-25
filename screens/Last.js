import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default class Last extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={{ marginTop: 30 }}  >
          <Image source={require('../assets/3.png')} resideMode= "contain" style={{ width: undefined, height: 250,  }} />
          <Text style={{ marginTop: 45, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}> 
             While there's a lot confusion about recycling, there's one thing we all need to be crystal clear about. Food or liquids do not belong in your recycling bin. Ever. Period. This means all containers must be emptied and rinsed clean.
          </Text>
          </View>
          <View style={{ marginTop: 40 }}>
          <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
             This applies to paper too Ever wonder why many programs don't accept pizza boxes, I mean, they're carboard - right? The reason is only clean cardboard can be recyled. Left-over food and especially grease make recycling paper and cardboard near impossible, and these materials can contaminate entire batches.
          </Text>
          </View>
          <View style={{ marginTop: 40 }}>
          <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
             So please, no food or liquids, including grease, in recycling.
          </Text>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  }
})
