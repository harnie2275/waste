import 'react-native-gesture-handler/Swipeable';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Dimensions, Image, ImageBackground, Animated, TouchableOpacity } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons, Feather, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Welcome extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          content: [
            {
              titleLabel: "Easy \nFlight Booking",
              description: "We have made flight booking easier with just one click of the ORDER button",
              imageURL: require("../assets/01.png"),
            },
            {
              titleLabel: "Aviation \nSchool",
              description: "Get into any aviation school of your choice. \nWe have partnered with the best schools to get your dream rolling",
              imageURL: require("../assets/02.png"),
            },
          ]
        };
      }


      scrollX = new Animated.Value(0);

      render() {
        let postion = Animated.divide(this.scrollX, width);
        return (
          <View style={{flex: 1,  }} >
          <View  >
            <View style={{ height: "90%", width: "100%",  }}> 
              <FlatList
                  data={this.state.content}
                  pagingEnabled
                  scrollEnabled
                  horizontal
                  snapToAlignment="center"
                  showsHorizontalScrollIndicator={false}
                  style={{
                  width: "100%",
                  height: "100%",
                  
          
                  }}
                  keyExtractor={(item, index) => index.toString()}
                  scrollEventThrottle={16}
                  onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: this.scrollX } } }
                  ])}
                  renderItem={({ item, index }) => (
                    <View style={{ 
                      width, height,
                     justifyContent: "center"
                      
                    }}>
                      <Image source={item.imageURL}  resizeMode="contain"
                      style={{ width, height: height / 2.7, overflow: 'visible',  }} />
                      <Text style={{ fontWeight: "bold", fontSize: 35, marginHorizontal: 40, color: "#202020", marginTop: 50, fontStyle: "italic" }}>{item.titleLabel}</Text>
                      <Text style={{ fontWeight: "600", fontSize: 15, marginHorizontal: 40, color: "dimgrey", marginTop: 15 }}>{item.description}</Text>
                      
                    </View>
                  )}
                />
            </View>
    
            <View style={{ flexDirection: "row", height: "10%", alignItems: "center", justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {this.state.content.map((_, i) => {
                const opacity = postion.interpolate({
                  inputRange: [i - 1, i, i + 1],
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: 'clamp',
              });
    
              return (
                <Animated.View
                  key={i}
                  style={[styles.steps, { opacity }]}
                />
              )
            })}
            </View>
            <TouchableOpacity  style= {{ position: "absolute", bottom: 20, right: 30, }} onPress={() => this.props.navigation.navigate('Register')} >
              <Feather name="check-circle" size={30} color="dodgerblue" />
            </TouchableOpacity>
          </View>
          </View>
          </View>
    
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white", 
      },
      steps: {
        height: 7,
        width: 7,
        borderRadius: 4,
        margin: 4,
        backgroundColor: "dimgrey"
      }
    })

  

  
