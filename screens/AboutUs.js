import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image} from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons, Feather, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privacy: false,
      terms: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: "35%", backgroundColor: "royalblue", flexDirection: "row", justifyContent: "space-between"  }}>
         <View style={{ marginTop: 70, marginHorizontal: 25 }}>
          <Text style={{ fontWeight: "700", fontSize: 22, color: "white",  }}>
            About Us
          </Text>
         </View>
         <View style={{ marginTop: 70, marginHorizontal: 25 }}>
           <TouchableOpacity onPress={() => this.props.navigation.goBack()} ><MaterialCommunityIcons name="window-close"  size={30} color="white" /></TouchableOpacity>
         
         </View>
        </View>
        <View style={{ height: "35%", }}>
        <TouchableOpacity style={{  height: 75,   justifyContent: "center", borderColor: "lightgrey" }} onPress={() => this.props.navigation.navigate('')} >
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
            <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey"}}>Rate the App</Text>
            <Ionicons name="md-arrow-dropright"  size={24} color="dimgrey" />        
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 75, borderTopWidth: 0.5,  justifyContent: "center", borderColor: "lightgrey" }} onPress= {() => this.setState({ privacy: true })}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
            <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey"}}>Privacy Policy</Text>
            <Ionicons name="md-arrow-dropright"  size={24} color="dimgrey" />        
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 75, borderTopWidth: 0.5, borderBottomWidth: 0.5, justifyContent: "center", borderColor: "lightgrey" }} onPress= {() => this.setState({ terms: true })}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
            <Text style={{fontWeight: "700", fontSize: 15, color: "dimgrey"}}>Term of Use</Text>
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


        <Modal 
        animationType="slide"
        visible={this.state.privacy}
        style={{ flex: 1,}}
        >
            <View style={{ marginTop: 30, marginHorizontal: 10 }}>
                <TouchableOpacity onPress= {() => this.setState({ privacy: false })}> 
                        <MaterialCommunityIcons name="window-close" size={30} color="#202020"  />
                </TouchableOpacity>
                <View style={{ alignItems: "center" }}>
                
                <Image source={require('../assets/1.png')} resideMode= "contain" style={{ width: "95%", height: 250,  }} />
                <Text style={{fontWeight: "700", fontSize: 20, color: "dimgrey", marginTop: 50}}>No Information Avaible Yet!</Text>
                </View>
            </View>
            
        </Modal>
        <Modal 
        animationType="slide"
        visible={this.state.terms}
        style={{ flex: 1,}}
        >
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress= {() => this.setState({ terms: false })}> 
                        <MaterialCommunityIcons name="window-close" size={30} color="#202020"  />
                </TouchableOpacity>
                <View style={{ alignItems: "center" }}>
                <Image source={require('../assets/3.png')} resideMode= "contain" style={{ width: "95%", height: 250,  }} />
                <Text style={{fontWeight: "700", fontSize: 20, color: "dimgrey", marginTop: 50}}>No Information Avaible Yet!</Text>
                </View>
            </View>
            
        </Modal>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
})
