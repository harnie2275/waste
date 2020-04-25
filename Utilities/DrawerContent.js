import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, EvilIcons, Foundation, MaterialIcons, SimpleLineIcons, Entypo, FontAwesome,
    AntDesign } from '@expo/vector-icons';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Fire from './Fire';

export default class DrawerContent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user: {}
        }
    }

    unsubscribe = null

    componentDidMount() {
        const user = this.props.uid || Fire.shared.uid

        this.unsubscribe = Fire.shared.firestore.collection("users").doc(user).onSnapshot(doc => {
            this.setState({ user: doc.data() })
        } )
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render() {
        return(
            <View style={{ flex: 1, backgroundColor: "black" }} >
                <DrawerContentScrollView style={{ }}>
                    <View style={ styles.drawerContent }>
                        <View style={ styles.userInfoSection } >
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }} >
                                <Avatar.Image source={ this.state.user.avatar ? {uri: this.state.user.avatar} : require('../assets/avatar.png') } size={80} style={{ backgroundColor: "white" }} />
                                <View style={{ marginLeft: 5 }}>
                                    <Title style={ styles.title } > {this.state.user.name} </Title>
                                    <Caption style={ styles.caption }> {this.state.user.email} </Caption>
                                    <Caption style={styles.caption}> {this.state.user.phone} </Caption>
                                </View>
                            </View>
                            
        
                        </View>
                        <Drawer.Section style={styles.drawerSection}  >
                            <DrawerItem 
                                icon={({ color, size }) => ( <MaterialCommunityIcons name="recycle" color="white" size={size}  /> ) }
                                label="Mi-Cycle"
                                onPress={() => {this.props.navigation.navigate('Sale')} }
                                labelStyle={{ color: "white", }}
                                
                            />
                            <DrawerItem 
                                icon={({ color, size }) => ( <Entypo name="pin" color="white" size={20}  /> ) }
                                label="iReport"
                                onPress={() => {this.props.navigation.navigate('ireport')} }
                                labelStyle={{ color: "white", }}
                            />
                            <DrawerItem 
                                icon={({ color, size }) => ( <FontAwesome name="group" color="white" size={20}  /> ) }
                                label="About Us"
                                onPress={() => {this.props.navigation.navigate('About')} }
                                labelStyle={{ color: "white", }}
                            />
                            <DrawerItem 
                                icon={({ color, size }) => ( <MaterialCommunityIcons name="file-document" color="white" size={20}  /> ) }
                                label="Infography"
                                onPress={() => {this.props.navigation.navigate('Infography')} }
                                labelStyle={{ color: "white", }}
                            />
                            <DrawerItem 
                                icon={({ color, size }) => ( <Entypo name="notification" color="white" size={20}  /> ) }
                                label="Notiification"
                                onPress={() => {this.props.navigation.navigate('Notification')} }
                                labelStyle={{ color: "white", }}
                            />
                            <DrawerItem 
                                icon={({ color, size }) => ( <Ionicons name="ios-chatbubbles" color="white" size={20}  /> ) }
                                label="Support"
                                onPress={() => {this.props.navigation.navigate('Support')} }
                                labelStyle={{ color: "white", }}
                            />
                            <DrawerItem 
                                icon={({ color, size }) => ( <FontAwesome name="wpforms" color="white" size={20}  /> ) }
                                label="Report Challenge/Upgrades"
                                onPress={() => { this.props.navigation.navigate('Challenge')} }
                                labelStyle={{ color: "white", }}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({ color, size }) => ( <AntDesign name="logout" color="white" size={20}  /> ) }
                        label="Log-Out"
                        onPress={() => {Fire.shared.signOut();} }
                        labelStyle={{ color: "white", }}
                    />
                </Drawer.Section>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: "grey",
        borderTopWidth: 0.3
    },
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    row: {
        marginTop: 20,
        alignItems: "flex-end",
        width: "90%",
        flex: 1,
        justifyContent: "flex-end"
    },
    caption: {
        fontSize: 12,
        lineHeight:14,
        color: "white"
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white"
    },
    drawerSection: {
        marginTop: 30,
        borderTopColor: "grey",
        borderTopWidth: 0.3,
    }
})
