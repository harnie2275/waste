import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image} from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons, Feather, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} ><MaterialCommunityIcons name="arrow-left"  size={30} color="dimgrey" /></TouchableOpacity>
        <ScrollView>
            <Text style={{ fontWeight: "800", fontSize: 20 }}>
                Hello,
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 16, marginTop: 10 }}>
                Here are the following 
            </Text>
            <View>
                <View style={{  height: 350,  borderColor: "lightgrey", marginTop: 30, }}  >
                    <View style={{  }}>
                        <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey"}}>1. Open the Blueko app</Text>
                        <Image source={require('../assets/apploading.jpg')} style={{ height: 350, width: 150, position: "absolute"}} resizeMode="contain" />                              
                    </View>
                </View>
                <View style={{height: 370, borderTopWidth: 0.5,  borderColor: "lightgrey",  }} >
                    <View style={{ }}>
                        <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey", marginTop: 30,}}>2. click on the iReport icon in the tab bar.</Text>
                        <Image source={require('../assets/iconshown2.jpg')} style={{ height: 350, width: 150, position: "absolute", marginTop: 30}} resizeMode="contain" />      
                    </View>
                </View>
                <View style={{height: 1050, borderTopWidth: 0.5, borderBottomWidth: 0.5,  borderColor: "lightgrey" }} >
                    <View style={{  }}>
                        <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey", lineHeight: 25, marginTop: 30,}}>
                          3. There are various option to report for waste around your area
                        </Text>
                        <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey", lineHeight: 25}} >a. clicking on the report button at the right buttom corner of your screen, upload the snapped images of the waste. </Text>
                        <Image source={require('../assets/report.jpg')} style={{ height: 350, width: 150, position: "relative", }} resizeMode="contain" />
                        <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey", lineHeight: 25}}> Note: You must be in the location of the waste while reporting any waste, so as to get the location via gps service. </Text>

                        <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey", lineHeight: 25, marginTop: 50}}>b. Clicking on the call button on the right Top corner of your screen, and connect with one agent. </Text>
                        <Image source={require('../assets/call.jpg')} style={{ height: 350, width: 150, position: "relative", }} resizeMode="contain" />
                        <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey", lineHeight: 25}}>Note: it is best to use the first option for quick response and result of services. </Text>
                            
                    </View>
                </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    flex: 1,
    marginHorizontal: 15
  },
})
