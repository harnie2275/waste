import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, EvilIcons, Foundation, MaterialIcons, SimpleLineIcons, Entypo, FontAwesome,
  AntDesign, Feather } from '@expo/vector-icons';


  const colors= [
    '#994F14','#DA291C','#FFCD00','#007A33','#EB9CA8', '#7C878E',
    '#8A004F','#000000','#10069F','#00a3e0','#4CC1A1'
]

post = [
  {
    id: "1",
    key: "Paper",
    icon: <FontAwesome name="newspaper-o" size={15} color="white" />,
    
  },
  {
    id: "2",
    key: "Batteries",
    icon: <Entypo name="battery" size={15} color="white" />
  },
  {
    id: "3",
    key: "E-waste",
    icon: <Feather name="hard-drive" size={15} color="white"/>
  }, {
    id: "4",
    key: "Plastics & Cans",
    icon: <MaterialCommunityIcons name="bottle-wine" size={15} color="white"/>
  },
  {
    id: "5",
    key: "Bio-Hazardous",
    icon: <MaterialCommunityIcons name="medical-bag" size={15} color="white"/>
  }
]

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> Home </Text>

        <FlatList
          data={post}
          renderItem={({item,index}) => <View style={[styles.item,{backgroundColor:colors[index%colors.length]}]}>
            
            <View style={[styles.inner,]}><Text> {item.key} </Text></View>
              
          </View>}
        />


        <View style={styles.tabbarcontainer}>
          <View style={styles.tabbar}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sale')}}>
            <MaterialIcons name="explore" size={24} color="silver" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sale')}}>
            <Entypo name="shop" size={24} color="silver" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('History')}} >
            <Entypo name="open-book" size={24} color="silver" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Cart')}}>
            <Ionicons name="md-cart" size={30} color="white" />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 200,
    color: "white",
    marginTop: -20,
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  inner: {
    marginHorizontal: 50
  }
 
})