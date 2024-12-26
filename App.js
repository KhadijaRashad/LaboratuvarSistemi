import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Loginscreen from './screen/login'; 
import SignUpScreen from './screen/SignUpScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Loginscreen></Loginscreen>
       
    </SafeAreaView>   
       
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
});
