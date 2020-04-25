import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fire from '../Utilities/Fire';
require("firebase/firestore");
const firebase = require("firebase")


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribed: false,
      subscription: {
        status: [],
        
      }, 
      user: {},
      unsubscribe: false
    };
    
  }

  unsubscribe = null

  componentDidMount() {
      const user = this.props.uid || Fire.shared.uid

      this.unsubscribe = Fire.shared.firestore.collection("Agency Subscription").doc(user).onSnapshot(doc => {
          this.setState({ user: doc.data() })
      } )
  }

  componentWillUnmount(){
      this.unsubscribe();
  }


  

  newState = () => {
    this.setState({ subscribed : this.state.user.status })
  }

  showHideComponent = () => {

    if (this.state.subscribed == false) {
      this.setState({ subscribed: this.state.user.status });
    } else {
      this.setState({ subscribed: false });
    }
  };


  sendSubcription = () =>{
    Fire.shared.agencySubscription(this.state.subscription)
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        
        <TouchableOpacity onPress={() => { this.sendSubcription(); this.showHideComponent();}}>
          <Image
            source={this.state.subscribed ? null : {uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'} }
            style={{ width: 100, height: 100 }}
          />
          </TouchableOpacity>
        <Text > </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
});