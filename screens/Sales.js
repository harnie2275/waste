import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView, TextInput } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, EvilIcons, Foundation, MaterialIcons, SimpleLineIcons, Entypo, FontAwesome,
  AntDesign } from '@expo/vector-icons';


export default class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
     
    };
  }



  updateSearch = search => {
    this.setState({ search });
  };

  render() {
  
    return (
      <View style={{ flex: 1, backgroundColor: "white", }}>
        <ScrollView style={{ height: "100%" }}>
          <View style={{ paddingTop: 30, backgroundColor: "#2f2f3b", height: 270, }} >
            <View style={{ flexDirection: "row", marginHorizontal: 15, alignItems: "center", }}>
              <TouchableOpacity onPress={() => {this.props.navigation.openDrawer()}}><Image source={require('../assets/menu3.png')} style={{ height: 25, width: 25 }} resizeMode="contain" /></TouchableOpacity>
              <View style={styles.formInput}>
                    <TextInput style={styles.input}
                    onChangeText={this.updateSearch}
                    value= {this.state.search}
                    autoCapitalize= "none"
                    keyboardType="web-search"
                    placeholder="Categories of recyclables...."></TextInput>
                </View>
            </View>
            <View style={{ flexDirection: "row",justifyContent: "space-between",marginHorizontal: 25, marginTop: 30,  }}>
              <View>
                <Image source={require('../assets/makemoney.png')} style={{ height: 150, width: 150,  }} resizeMode="contain" />
              </View>
              <View>
                <Image source={require('../assets/man.png')} style={{ height: 150, width: 150,  }} resizeMode="contain" />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 25, marginHorizontal: 20, }}>
            <Text style={{ color: "#2f2f3b", fontWeight: "bold", fontSize: 20, letterSpacing: 0.3 }}> ALL COLLECTIBLES</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginHorizontal: 5, marginTop: 40 }}>
            <View>
            <TouchableOpacity style={{ backgroundColor: "#aba6bf", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('Papers')}}  >
              <Entypo name="documents" size={35} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5, }}> Papers </Text>
            </View>
            <View>
            <TouchableOpacity style={{ backgroundColor: "whitesmoke", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('Metals')}}>
              <MaterialCommunityIcons name="washing-machine" size={35}  />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5 }}> Metals </Text>
            </View>
            <View>
            <TouchableOpacity style={{ backgroundColor: "#583e2e", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('Glasses')}}>
              <MaterialCommunityIcons name="bottle-wine" size={40} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5 }}> Glasses </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginHorizontal: 5, marginTop: 40 }}>
          <View>
            <TouchableOpacity style={{ backgroundColor: "#595775", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('Plastics')}}>
              <Entypo name="bucket" size={35} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5 }}> Plastics </Text>
            </View>
            <View>
            <TouchableOpacity style={{ backgroundColor: "whitesmoke", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('Batteries')}}>
              <Entypo name="battery" size={35} />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5 }}> Batteries </Text>
            </View>
            <View>
            <TouchableOpacity style={{ backgroundColor: "#f1e0d6", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('Electronics')}}>
              <MaterialCommunityIcons name="television-classic" size={35} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5 }}> Electonics </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginHorizontal: 5, marginTop: 40, marginBottom: 100 }}>
          <View>
            <TouchableOpacity style={{ backgroundColor: "#2f2f3b", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('Seven')}}>
              <Image source={require('../assets/7up.png')} resizeMode="contain" style={{ width: 50, height: 50 }} />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5 }}> 7up </Text>
            </View>
            <View>
            <TouchableOpacity style={{ backgroundColor: "whitesmoke", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('Clothes')}}>
              <Image source={require('../assets/cloth.png')} resizeMode="contain" style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5 }}> Clothes </Text>
            </View>
            <View>
            <TouchableOpacity style={{ backgroundColor: "#bf988f", color: "2f2f3b", height: 70, width: 70, borderRadius: 35, alignItems: "center", justifyContent: "center" }} onPress={() => {this.props.navigation.navigate('NBCCoke')}}>
              <Image source={require('../assets/coke.png')} resizeMode="contain" style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            <Text style={{ color: "#2f2f3b", fontSize: 15, fontWeight: "800", textAlign: "center", marginTop: 5 }}> Coca-Cola </Text>
            </View>
          </View>
        </ScrollView>



        <View style={styles.tabbarcontainer}>
          <View style={styles.tabbar}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sale')}}>
            <MaterialIcons name="explore" size={30} color="dodgerblue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sale')}}>
            <Ionicons name="ios-bookmarks" size={24} color="silver" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('History')}} >
            <Entypo name="news" size={24} color="silver" />
          </TouchableOpacity>
          <TouchableOpacity >
           
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#242424",
    height: 60,
    width: "100%",
    
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  tabbarcontainer: {
    marginHorizontal: 55,
    position: "absolute",
    bottom: 15
  },
  header: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  PageTitle: {
    fontSize: 30,
    fontWeight: "bold"
  },
  cardlist: {
    flexDirection: "row",
    height: 250,
    width: "100%",
    alignItems: "center",
    marginVertical: 15,
  },
  card1: {
    flexDirection: "column",
    height: "100%",
    width: "55%",
    backgroundColor: "red",
    borderRadius: 5,
    position: "absolute",
    right: 7,
    bottom: 0,
    shadowOpacity: 0.5,
    shadowColor: "#202020",
    shadowOffset: {height: 4},  
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  card2: {
    flexDirection: "column",
    height: "80%",
    width: "45%",
    backgroundColor: "white",
    borderRadius: 5,
    marginLeft: -30,
    position: "absolute",
    left: 45,
    shadowOpacity: 0.5,
    shadowColor: "#202020",
    shadowOffset: {height: 2}, 
    shadowRadius: 3, 
    justifyContent: "center",
    paddingHorizontal: 10

  },
  card3: {
    flexDirection: "row",
    height: "100%",
    width: "55%",
    backgroundColor: "red",
    borderRadius: 5,
    marginLeft: -30,
    position: "absolute",
    left: 45,
    shadowOpacity: 0.5,
    shadowColor: "#202020",
    shadowOffset: {height: 2}, 
    shadowRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  card4: {
    flexDirection: "row",
    height: "80%",
    width: "45%",
    backgroundColor: "white",
    borderRadius: 5,
    position: "absolute",
    right: 10,
    shadowOpacity: 0.5,
    shadowColor: "#202020",
    shadowOffset: {height: 4},
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
    
  },
  formInput: {
    backgroundColor: "white",
    borderRadius: 25,
    height: 45,
    fontSize: 15,
    color: "#161f3d",
    marginTop: 4,
    marginHorizontal: 5,
    
    width: "90%",
    marginLeft: 15
},
input: {
  backgroundColor: "white",
  borderRadius: 5,
  height: 45,
  fontSize: 15,
  marginHorizontal: 25
  
},
  
})