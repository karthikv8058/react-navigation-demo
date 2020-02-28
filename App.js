import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { View, Text,Button } from 'react-native';

import React, { Component } from 'react';

import Feed from './screens/Feed';
import Details from './screens/Details';

import Contact from './screens/drawer/screen1';
import Settings from './screens/drawer/screen2';

import Tab1 from './screens/tabs/tab1';
import Tab2 from './screens/tabs/tab2';
import Tab3 from './screens/tabs/tab3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MeterialBottomTaps = createMaterialBottomTabNavigator();
const MeterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {

  componentWillMount(){
    createHomeStack = ({ navigation }) =>
    <Stack.Navigator>
      <Stack.Screen options={{
          headerRight:
            () =>(
              <Button
              onPress={()=>{navigation.openDrawer()}}
              title="Menu"
              color="#000"
            />
              )
          ,
          headerTitleAlign:'center',
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }} name="Feeds" component={Feed} />
      <Stack.Screen name="Details" component={Details} />
      
      <Stack.Screen options={{
        headerStyle:{backgroundColor:'#00306b'},
        headerTitleStyle:{color:'#fff'},
        headerTitleAlign:'center',
        headerBackTitleStyle:{color:'#fff',backgroundColor:'#fff'}
        }} name="Top Tabs" children={createTopTabs} />

      <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
    </Stack.Navigator>

    createContactStack = ({navigation}) => <Stack.Navigator>
      <Stack.Screen options={{
        headerRight: () => (
          <Button
              onPress={()=>{navigation.openDrawer()}}
              title="Menu"
              color="#000"
            />
        ),
        headerTitleAlign:'center'
      }} name="Contact" component={Contact}/>
    </Stack.Navigator>

  createSettingsStack = ({navigation}) => <Stack.Navigator>
  <Stack.Screen options={{
    headerRight: () => (
      <Button
          onPress={()=>{navigation.openDrawer()}}
          title="Menu"
          color="#000"
        />
    ),
    headerTitleAlign:'center'
  }} name="Settings" component={Settings}/>
  </Stack.Navigator>

  createTopTabs = () => {
    return <MeterialTopTabs.Navigator tabBarOptions={{
      style:{backgroundColor:'#00225c'},
      labelStyle: { fontSize: 12,color:'#fff' },
      }}>
          <MeterialTopTabs.Screen name="Tab 1" component={Tab1}/>
          <MeterialTopTabs.Screen name="Tab 2" component={Tab2}/>
          <MeterialTopTabs.Screen name="Tab 3" component={Tab3}/>
    </MeterialTopTabs.Navigator>
  }
  createBottomTabs = () => {
    return <MeterialBottomTaps.Navigator>
          <MeterialBottomTaps.Screen name="Tab 1" component={Tab1}/>
          <MeterialBottomTaps.Screen name="Tab 2" component={Tab2}/>
          <MeterialBottomTaps.Screen name="Tab 3" component={Tab3}/>
    </MeterialBottomTaps.Navigator>
  }
  }
  render() {
    return (
      <NavigationContainer>
         <Drawer.Navigator>
           <Drawer.Screen name="Home" children={createHomeStack} />
           <Drawer.Screen name="Contact" children={createContactStack} />
           <Drawer.Screen name="Settings" component={createSettingsStack} />
         </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
