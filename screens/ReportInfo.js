import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert} from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons, Feather, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: "25%", backgroundColor: "royalblue", flexDirection: "row", justifyContent: "space-between"  }}>
         <View style={{ marginTop: 70, marginHorizontal: 25 }}>
          <Text style={{ fontWeight: "700", fontSize: 22, color: "white",  }}>
            Know How To Report
          </Text>
         </View>
         <View style={{ marginTop: 60, marginHorizontal: 25 }}>
           <TouchableOpacity onPress={() => this.props.navigation.goBack()} ><MaterialCommunityIcons name="window-close"  size={30} color="white" /></TouchableOpacity>
         
         </View>
        </View>
        <View style={{ height: "48%", }}>
        <TouchableOpacity style={{  height: 75,   justifyContent: "center", borderColor: "lightgrey" }} onPress={() => Alert.alert(
          'Coming Soon!',
          'Stay Alert for update',
          
          [
          
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          
        )} >
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
            <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey"}}>Watch Video</Text>
            <Ionicons name="md-arrow-dropright"  size={24} color="dimgrey" />        
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 75, borderTopWidth: 0.5,  justifyContent: "center", borderColor: "lightgrey" }} onPress={() => this.props.navigation.navigate('ReadReport')}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
            <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey"}}>Read about it</Text>
            <Ionicons name="md-arrow-dropright"  size={24} color="dimgrey" />        
          </View>
        </TouchableOpacity>
        </View>
        <View style={{ height: "35%",marginHorizontal: 20, marginTop: 20,  }}>
          <Text style={{fontWeight: "700", fontSize: 16, color: "dimgrey"}}>Social Media</Text>
          <View style={{ flexDirection: "row", marginTop: 100, }}>
            <TouchableOpacity style={{ marginRight: 20 }}>
              <SimpleLineIcons name="social-facebook" size={24} color="dimgrey" />
            </TouchableOpacity >
            <TouchableOpacity  style={{ marginRight: 20 }}>
              <SimpleLineIcons name="social-twitter" size={24} color="dimgrey" />
            </TouchableOpacity>
            <TouchableOpacity  style={{ marginRight: 20 }}>
              <Ionicons name="ios-mail-unread" size={24} color="dimgrey"/>
            </TouchableOpacity>
            <TouchableOpacity  style={{ marginRight: 20 }}>
              <MaterialCommunityIcons name="whatsapp" size={24} color="dimgrey" />
            </TouchableOpacity>

          </View>
        </View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
})
