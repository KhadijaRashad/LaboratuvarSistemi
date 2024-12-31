import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, ScrollView,SafeAreaView } from "react-native";
 import LoginScreen from './screen/LoginScreen';
import SignUpScreen from './screen/SignUpScreen';
import HomeScreen from './screen/HomeScreen';
import TestSonuclari from './screen/TestSonuclari'; 
import ProfileScreen from './screen/ProfileScreen';


 

const Stack = createStackNavigator();

export default function App() {
  return (

           
            <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen
                initialRouteName="Login" 
                name="Login" 
                component={LoginScreen} 
                
              />
              <Stack.Screen 
                name="SignUpScreen" 
                component={SignUpScreen} 
                
              />
              <Stack.Screen
              name="HomeScreen"
                component={HomeScreen} 

                />
              <Stack.Screen 
              name="ProfileScreen" 
              component={ProfileScreen} />

              <Stack.Screen
                 
                name="TestSonuclari" 
                component={TestSonuclari} 
                
              />
               

                  
            </Stack.Navigator>
          </NavigationContainer>
            
     
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:  'white',
    alignItems: 'center',
    justifyContent: 'center',
   //padding:30 ,
    margin:10
  },
});