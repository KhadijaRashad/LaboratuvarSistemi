
import React, { useState } from 'react'
import { Text, View, StyleSheet,Image,useWindowDimensions, ScrollView } from "react-native";
import userbtn from '../../components/userbtn ';
import userbtn from "../../components/userbtn " ;
import userinput from '../../components/userinput ';
import userinput from '../../components/userinput '; 
import userinput from '../components/userinput.js';
import SocialSinginButtons from '../../components/SocialSinginButtons ';
export default function Loginscreen({ navigation }) {
    const [username, setUsername] = useState("" );
    const [passworld, setPassword] = useState( "");
    const onSigInPressed=()=>{
       console.warn("Giriş Yap") 
    }
    const onForgetPasswordPressed=()=>{
        console.warn("onForgetPasswordPressed") 
     }
      
     const onSingUpPressed=()=>{
         console.warn( `onSingUpPressed`) 
     } 
    const { height}=useWindowDimensions();
      
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.view}>
             
            <userinput  placholder="Username" value={username} setValue={setUsername} />
            <userinput  placholder="Password" value={passworld} setValue={setPassword} secureTextEntry={true} />
            <userbtn  text="Giriş Yap"  onPress="onSigInPressed"  />
            <userbtn  text="Şifre Unutum"  onPress="onForgetPasswordPressed"  type="TERTIARY"/>
             <SocialSinginButtons></SocialSinginButtons>
            <userbtn  text="Kayit Ol"  onPress="onSingUpPressed"   />
            </View>
        </ScrollView>
         
         
         
        );
    
}
const styles = StyleSheet.create({
    view: {
         
        padding:20,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
         
         width:  "70%" ,
         maxWidth:300,
         height: 100 ,
    } ,
     
})
