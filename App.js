import React from 'react'; 
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './screen/login'; 
import SignUpScreen from './screen/SignUpScreen ';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ headerShown: false }} 
        />
               
      </Stack.Navigator>
    </NavigationContainer>  
       
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
});
