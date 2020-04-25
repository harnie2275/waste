import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default class SInglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={{ marginTop: 30 }}  >
          <Image source={require('../assets/2.png')} resideMode= "contain" style={{ width: undefined, height: 250,  }} />
          <Text style={{ marginTop: 45, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}> 
            With all the new types of packaging these days, we know that it's not always easy to know which containers are accepted in your local recycling program. if you remember this one rule, your life will be a bit easier and you'll be doint a better job or conserving resources and helping the planet.
          </Text>
          </View>
          <View style={{ marginTop: 40 }}>
          <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
            Bottles and Jars-every local recyling program we know of accepts plastic bottles and jars, and most accept glass ones too. check out the links below for additional information.
          </Text>
          </View>
          <View style={{ marginTop: 40 }}>
          <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
            Cans- this is easy. If it is a food or beverage can it should always be recycled.
          </Text>
          </View>
          <View style={{ marginTop: 40 }}>
          <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
            if you live in an area where you pay a desposit when purchasing certain types of product s, it makes sense to get your money back by returning your empty containers to a deposit refund location. if you can't be bothered, then be sure to recycle them through your local program.
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
    
  }
})
