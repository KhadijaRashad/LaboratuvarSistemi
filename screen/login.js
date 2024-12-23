
import React, { useState } from 'react'
import { Text, View, StyleSheet,Image,useWindowDimensions } from "react-native"
import logo from " ../assets/image.png";
import userinput  from "  ../components/userinput";
import userbtn from '../components/userbtn';
 
export default function Loginscreen({ navigation }) {
    const [username, setUsername] = useState("" );
    const [passworld, setPassword] = useState( "");
    const onSigInPressed=()=>{
       console.warn("Giriş Yap") 
    }
    const onForgetPasswordPressed=()=>{
        console.warn("onForgetPasswordPressed") 
     }

    const { height}=useWindowDimensions();
      
    return (
        <View style={styles.view}>
            <Image source={logo} style={[styles.logo, {height:height*0.3}]}  resizeMode='contain'/>
            <userinput  placholder="Username" value={username} setValue={setUsername} />
            <userinput  placholder="Password" value={passworld} setValue={setPassword} secureTextEntry={true} />
            <userbtn  text="Giriş Yap"  onPress="onSigInPressed"  />
            <userbtn  text="Şifre Unutum"  onPress="onForgetPasswordPressed"  type="TERTIARY"/>
             
        </View>
         
         
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
