 
import { StyleSheet, Text,View, SafeAreaView} from 'react-native';
 
 import LoginScreen from './screen/LoginScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.root}> 
      <LoginScreen/>
    </SafeAreaView>
     
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:  'white',
    alignItems: 'center',
    justifyContent: 'center',
   //padding:30 ,
    margin:20
  },
});