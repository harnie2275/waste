import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView, TextInput, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, EvilIcons, Foundation, MaterialIcons, SimpleLineIcons, Entypo, FontAwesome,
  AntDesign } from '@expo/vector-icons';


export default class Papers extends Component {
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
    let dimensions = Dimensions.get("window");
    let imageHeight = dimensions.height / 1.7;
    let imageWidth = dimensions.width / 1.5;
    return (
      <View style={{ flex: 1, backgroundColor: "whitesmoke", }}>
        <ScrollView style={{ height: "100%",  }}>
          <View style={{ paddingTop: 35, backgroundColor: "#6d6c89", height: 170 }} >
            <View style={{ flexDirection: "row", marginHorizontal: 15, alignItems: "center" }}>
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
            <View style={{ marginHorizontal: 15 }}>
              <Text style={{ color: "white", fontSize: 24, fontWeight: "800", marginTop: 30 }} > Papers </Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 15 }}>
            <Text style={{ color: "gainsboro", fontSize: 13 }}>Available</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ color: "grey", fontSize: 20, fontWeight: "800" }}>FOR YOU</Text>
              <TouchableOpacity style={{ width: 120, height: 30, backgroundColor: "gainsboro", justifyContent: "center",alignItems: "center", borderRadius: 5, width: "50%"  }} onPress={() => {this.props.navigation.goBack()}} >
                <Text style={{ color: "whitesmoke", fontSize: 14 }}>back to Categories</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView horizontal={true} style={{ marginHorizontal: 10, marginTop: 20 }} showsHorizontalScrollIndicator={false} >
            <View style={{ height: imageHeight, width: imageWidth, backgroundColor: "gainsboro", borderBottomEndRadius: 20, borderBottomStartRadius: 20, marginHorizontal: 5 }}>
              <Image source={require('../assets/wecyclers.png')} style={{ width: "100%", height: "50%" }} resizeMode="cover" />
              <View style={{ height: "50%", width: "100%", backgroundColor: "white", borderBottomEndRadius: 20, borderBottomStartRadius: 20, paddingTop: 10,  }}>
                <View style={{ marginHorizontal: 15 }}>
                  <View style={{ borderBottomWidth: 2, borderBottomColor: "whitesmoke",  }}>
                    <Text style={{ color: "#6d6c89", fontSize: 16, fontWeight: "900", width: "100%", lineHeight: 30, marginVertical: 10 }}>Wecycler Nigeria Limited</Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 50  }}>
                    <View style={{ flexDirection: "row", alignItems:"center" }}>
                      <Image source={require('../assets/naira.png')} resizeMode="contain" style={{ height:30, width: 30 }} />
                      <Text style={{ color: "dimgrey", fontSize: 20, fontWeight: "900",  marginVertical: 10, }}>100 <Text style={{ fontSize: 10 }} >per gram</Text></Text>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#6D6C89", fontSize: 16, fontWeight: "900",  marginVertical: 10, }}>SELL NOW</Text></TouchableOpacity>
                  </View>
                </View>
              </View> 
            </View>


            <View style={{ height: imageHeight, width: imageWidth, backgroundColor: "gainsboro", borderBottomEndRadius: 20, borderBottomStartRadius: 20, marginHorizontal: 5 }}>
              <Image source={require('../assets/greenhills.jpeg')} style={{ width: "100%", height: "50%" }} resizeMode="cover" />
              <View style={{ height: "50%", width: "100%", backgroundColor: "white", borderBottomEndRadius: 20, borderBottomStartRadius: 20, paddingTop: 10,  }}>
                <View style={{ marginHorizontal: 15 }}>
                  <View style={{ borderBottomWidth: 2, borderBottomColor: "whitesmoke",  }}>
                    <Text style={{ color: "#6d6c89", fontSize: 16, fontWeight: "900", width: "100%", lineHeight: 30, marginVertical: 10 }}>Green Hill Recycling Nigeria</Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 50  }}>
                    <View style={{ flexDirection: "row", alignItems:"center" }}>
                      <Image source={require('../assets/naira.png')} resizeMode="contain" style={{ height:30, width: 30 }} />
                      <Text style={{ color: "dimgrey", fontSize: 20, fontWeight: "900",  marginVertical: 10, }}>100 <Text style={{ fontSize: 10, }} >per gram</Text></Text>
                    </View>
                    <TouchableOpacity><Text style={{ color: "#6D6C89", fontSize: 16, fontWeight: "900",  marginVertical: 10, }}>SELL NOW</Text></TouchableOpacity>
                  </View>
                </View>
              </View> 
            </View>

            <View style={{ height: imageHeight, width: imageWidth, backgroundColor: "gainsboro", borderBottomEndRadius: 20, borderBottomStartRadius: 20, marginHorizontal: 5 }}>

            </View>
            <View style={{ height: imageHeight, width: imageWidth, backgroundColor: "gainsboro", borderBottomEndRadius: 20, borderBottomStartRadius: 20, marginHorizontal: 5 }}>

            </View>
            <View style={{ height: imageHeight, width: imageWidth, backgroundColor: "gainsboro", borderBottomEndRadius: 20, borderBottomStartRadius: 20, marginHorizontal: 5 }}>

            </View>
          </ScrollView>
          <View style={{ marginBottom: 30,height: 80 }} >
            
          </View>
        </ScrollView>



        <View style={styles.tabbarcontainer}>
          <View style={styles.tabbar}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sale')}}>
            <MaterialIcons name="explore" size={30} color="dodgerblue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sale')}}>
            <Entypo name="shop" size={24} color="silver" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('History')}} >
            <Entypo name="open-book" size={24} color="silver" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Cart')}}>
            <Ionicons name="md-cart" size={24} color="silver" />
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
  marginHorizontal: 25,
  
},
  
})