
import React, { useState } from 'react'
import { Text, View, StyleSheet,Image,useWindowDimensions } from "react-native"
import logo from " ../assets/image.png";
import userinput  from "  ../components/userinput";
 
export default function Loginscreen({ navigation }) {
    const [username, setUsername] = useState({
        email: "",
        pwd: ""
    })
    const [passworld, setPassword] = useState({
        email: "",
        pwd: ""
    })

    const { height}=useWindowDimensions();
      
    return (
        <View style={styles.view}>
            <Image source={logo} style={[styles.logo, {height:height*0.3}]}  resizeMode='contain'/>
            <userinput  placholder="Username" value={username} setValue={setUsername} />
            <userinput  placholder="Password" value={passworld} setValue={setPassword} secureTextEntry={true} />
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
