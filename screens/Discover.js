import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, EvilIcons, Foundation, MaterialIcons, SimpleLineIcons, Entypo, FontAwesome,
  AntDesign, Feather
} from '@expo/vector-icons';


post = [
  {
    id: "1",
    avatar: <Image source={require('../assets/wecycler.png')} resizeMode="contain" style={{ height: 50, width: 50, borderRadius: 25 }} /> ,
    Agency: "Wecyclers Nig. Limited",
    displayImage: <FontAwesome name="newspaper-o" size={15} color="white" />,
    writeup: " Here are some dummy data, Here are some dummy data Here are some dummy data, Here are some dummy data "
        
  },
  {
    id: "2",
    avatar: <Image source={require('../assets/eterra.png')} resizeMode="contain" style={{ height: 50, width: 50,  borderRadius: 25  }} /> ,
    Agency: "E-terra",
    displayImage: <FontAwesome name="newspaper-o" size={15} color="white" />,
    writeup: " Here are some dummy data, Here are some dummy data Here are some dummy data, Here are some dummy data "
  },
  {
    id: "3",
    avatar: <Image source={require('../assets/LAWMA.png')} resizeMode="contain" style={{ height: 50, width: 50, borderRadius:25 }} /> ,
    Agency: "E-waste",
    displayImage: <FontAwesome name="newspaper-o" size={15} color="white" />,
    writeup: " Here are some dummy data, Here are some dummy data Here are some dummy dataHere are some dummy data  "
  }, {
    id: "4",
    avatar: <Image source={require('../assets/wecycler.png')} resizeMode="contain" style={{ height: 50, width: 50,  borderRadius: 25  }} /> ,
    Agency: "Lawma",
    displayImage: <FontAwesome name="newspaper-o" size={15} color="white" />,
    writeup: " Here are some dummy data, Here are some dummy data Here are some dummy data Here are some dummy data "
  },
  {
    id: "5",
    avatar: <Image source={require('../assets/wecycler.png')} resizeMode="contain" style={{ height: 50, width: 50,  borderRadius: 25  }} /> ,
    Agency: "GreenHills",
    displayImage: <FontAwesome name="newspaper-o" size={15} color="white" />,
    writeup: " Here are some dummy data, Here are some dummy data Here are some dummy data Here are some dummy data "
  }
]


export default class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  renderPost = post => {
    return(
      <TouchableOpacity style={{ borderWidth: 0.7, height: 33, width: 150, justifyContent: "center", alignItems: "center", flexDirection: "row",  borderRadius: 20, marginHorizontal: 10, backgroundColor: "#202020", borderColor: "black" }}>
          {post.displayImage}
                 
      </TouchableOpacity>      
    )
  };


  render() {

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView style={{ height: "28%" }}>
          <View style={styles.header}>
            <Text style={styles.PageTitle}> Discover  <Text style={{ fontWeight: "400", fontSize: 14, color: "grey" }} > Recommended </Text> </Text>
            <TouchableOpacity onPress={() => {this.props.navigation.openDrawer()}}><Image source={require('../assets/menu2.png')} style={{ height: 25, width: 25, }} resizeMode="contain" /></TouchableOpacity>
          </View>
          <View style={styles.filter}>
          <FlatList horizontal={true} data={post} renderItem={({ item }) => this.renderPost(item)} keyExtractor={item => item.id} showsHorizontalScrollIndicator={false}/>
          </View>
        </ScrollView>
        <FlatList
          data={post}
          style={{ paddingTop: 20, paddingHorizontal: 2, paddingTop: 50 }}
          renderItem={({item,index}) => <View style={[styles.item,{backgroundColor:colors[index%colors.length]}]}>
            <View style={[styles.inner]}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "grey" }}>
                  {item.avatar}
                </View>
                <Text> Posted a day ago </Text>
              </View>
              <View style={{ alignSelf: "center", width: "100%",  justifyContent: "", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ width: "50%" }} >
                  {item.displayImage}
                </View>
                <View style={{ width: "48%", flexDirection: "row" }} >
                  <FontAwesome name="quote-left" size={24} style={{}} />
                  <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 5  }} ><Text >{item.writeup}</Text></View>
                </View>  
              </View>
              
              
            </View>
              
          </View>}
        />









        <View style={styles.tabbarcontainer}>
          <View style={styles.tabbar}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
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
  filter: {
    height: 60,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 350,
    color: "white",
    marginTop: -35,
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    
  },
  inner: {
    marginHorizontal: 10, 
  }
})

const colors= [
  '#7aaec3','#6d6c89','#2f2f3b',
]

const shadowStyle = {
  width: "100%",
  height: "100%",
  radius: 3,
  opacity: 0.2,
  x: 0,
  y: 3,
  style: { marginVertical: 5 }
}