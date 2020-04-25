import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ marginTop: 20, flex: 1, backgroundColor: "black"  }}>
        <TouchableOpacity style={{ backgroundColor: "white", width: 270, height: 50, borderRadius: 10, alignItems: "center", justifyContent: "center" }} onPress={() => this.props.navigation.navigate('know')} >
            <Text style={{ fontSize: 14, color: "black", fontWeight: "bold" }}>Collection Info</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
