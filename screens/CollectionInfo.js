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
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 30 }}  >
          
          <Image source={require('../assets/3things.png')} resideMode= "contain" style={{ width: undefined, height: 250,  }} />
          <Text style={{ marginTop: 45, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}> 
              Many people find recycling has gotton more complicated lately, so they put everything they think is recyclable into their bin. They figure their municapality can get rid of anything that doesn't belong. the industry calls it 'wish-cycling'. It costs municipal governments hundreds of millions of naira annually.
          </Text>
          <Text style={{ marginTop: 20, marginHorizontal: 30, fontWeight: "500", fontSize: 15 }}>
              The truth is that most local recycling programs prefer that if you're not sure whether an items is recycling container (actually, they prefer you can us Blueko to look uo where it should go!)
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ marginHorizontal: 30, fontWeight: "500", fontSize: 18 }}>
            Want to be a better recycler? Here are three rules to live by:
          </Text>
        </View>
        <TouchableOpacity style={{ marginHorizontal: 30, marginTop: 50, height: 70, borderTopWidth: 0.5,  justifyContent: "center", borderColor: "grey" }} onPress={() => this.props.navigation.navigate('First')} >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{fontWeight: "700", fontSize: 15}}>1. <Text>Don't bag your recyclable </Text></Text>
            <Ionicons name="ios-arrow-round-forward"  size={20} color="#73788B" />        
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 30,  height: 70, borderTopWidth: 0.5,  justifyContent: "center", borderColor: "grey" }} onPress={() => this.props.navigation.navigate('Second')}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{fontWeight: "700", fontSize: 15}}>2. <Text>Recycle all bottles, Jars and Cans </Text></Text>
            <Ionicons name="ios-arrow-round-forward"  size={20} color="#73788B" />        
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 30, height: 70, borderTopWidth: 0.5, borderBottomWidth: 0.5, justifyContent: "center", borderColor: "grey" }} onPress={() => this.props.navigation.navigate('Last')}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{fontWeight: "700", fontSize: 15}}>3. <Text>No food or liquids in recycling </Text></Text>
            <Ionicons name="ios-arrow-round-forward"  size={20} color="#73788B" />        
          </View>
        </TouchableOpacity>
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
