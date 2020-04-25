import 'react-native-gesture-handler/Swipeable';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, EvilIcons, Foundation, MaterialIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';



import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Agenda from './screens/Agenda';
import Loading from './screens/Loading';
import Profile from './screens/Profile';
import Register from './screens/Register';
import Faq from './screens/Faq';
import CollectionInfo from './screens/CollectionInfo';
import Setting from './screens/Setting';
import Share from './screens/Share';
import Ireport from './screens/Ireport';
import AboutUs from './screens/AboutUs';
import First from './screens/First';
import Second  from './screens/Second';
import Last from './screens/Last';
import ReadReport from './screens/ReadReport';
import ReportInfo from './screens/ReportInfo';
import Notification from './screens/Notification';
import Report from './screens/Report';
import test from './screens/test';
import Support from './screens/Support';
import DrawerContent from './Utilities/DrawerContent';
import Challenge from './screens/Challenge';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Sales from './screens/Sales';
import History from './screens/History';
import Cart from './screens/Cart';
import Seven from './Categories/7up';
import Batteries from './Categories/Batteries';
import Clothes from './Categories/Clothes';
import Electronics from './Categories/Electronics';
import Glasses from './Categories/Glasses';
import Metals from './Categories/Metals';
import NBCCoke from './Categories/NBC-Coke';
import NBL from './Categories/NBL';
import Plastics from './Categories/Plastics';
import Papers from './Categories/Papers';


const Stack = createStackNavigator();
const BTbar = createMaterialBottomTabNavigator();
const TTabr = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB7VnLOQ4-HOSUop4MLN_0egswuj8eOWD0",
  authDomain: "blueko-9ecad.firebaseapp.com",
  databaseURL: "https://blueko-9ecad.firebaseio.com",
  projectId: "blueko-9ecad",
  storageBucket: "blueko-9ecad.appspot.com",
};

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

export default class App extends Component {
  createAuthStack = () =>
    <Stack.Navigator initialRouteName="Welcome"  >
      <Stack.Screen name="Welcome"  component={Welcome} options={{
        headerShown: false, 
      }} />
      <Stack.Screen name="Login"  component={Login} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Register"  component={Register} options={{
        headerShown: false
      }} />
      
    </Stack.Navigator>

   createOtherStack = () =>
    <Stack.Navigator initialRouteName="faq"  >
       }} />
       <Stack.Screen  name="faq" component={Faq} options={{
        headerShown: false }} />
      <Stack.Screen  name="know" component={CollectionInfo} options={{
        headerShown: false }} />
    </Stack.Navigator>
    

  createBottomTab = () =>
      <BTbar.Navigator initialRouteName="Agenda" activeColor="#fff" inactiveColor="#bda1f7" barStyle={{backgroundColor: "#202020",}} shifting >
      
      </BTbar.Navigator>
    
  createDrawer = () =>
        <Drawer.Navigator drawerContent={props => <DrawerContent { ...props } />} initialRouteName="Sale" > 
          <Drawer.Screen name="test" component={Home} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Home" component={Discover} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="ireport" component={Ireport} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="About" component={AboutUs} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Infography" component={CollectionInfo} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Notification" component={Notification} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Support" component={Support} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Challenge" component={Challenge} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Sale" component={Sales} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
         <Drawer.Screen name="History" component={History} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Cart" component={Cart} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Batteries" component={Batteries} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Clothes" component={Clothes} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Glasses" component={Glasses} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Metals" component={Metals} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="NBCCoke" component={NBCCoke} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Seven" component={Seven} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="NBL" component={NBL} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Papers" component={Papers} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Plastics" component={Plastics} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
          <Drawer.Screen name="Electronics" component={Electronics} options={{
            drawerIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={24}  />)
            
          }} />
        </Drawer.Navigator>

  
      

    render() {
      return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Loading" >
            <Stack.Screen name="Auth" children={this.createAuthStack} options={{ headerShown: false }} />
            <Stack.Screen name="Tab" children={this.createBottomTab}  options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
            <Stack.Screen name="ReadReport" component={ReadReport} options={{ headerShown: false, }} />
            <Stack.Screen name="ReportInfo" component={ReportInfo} options={{ headerShown: false, }} />
            <Stack.Screen name="First" component={First} options={{ headerShown: false, }} />
            <Stack.Screen name="Second" component={Second} options={{ headerShown: false, }} />
            <Stack.Screen name="Last" component={Last} options={{ headerShown: false, }} />
            <Stack.Screen name="post" component={Report} options={{ headerShown: false, }} />
                      
            <Stack.Screen name='test' component={test} />
         
            <Drawer.Screen name="draw" children={this.createDrawer} options={{ headerShown: false, gestureEnabled: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
}