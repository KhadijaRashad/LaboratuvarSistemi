 
 import React, { useState } from 'react'
import {   View, StyleSheet ,Image, useWindowDimensions, ScrollView  } from "react-native";
import Logo from '../assets/Logo.png'
 import UserGiris from '../components/UserGiris'
import  UserButton from '../components/UserButton'
//import SocialSinginButtons from '../components/SocialSinginButtons';  
 
export default function LoginScreen( ) {
    const { height}=useWindowDimensions(); 
    const [username, setUsername] = useState("" );
    const [passworld, setPassword] = useState( "");
    const onSigInPressed=()=>{
        console.warn("Giriş Yap");//مايطلع التحذير
        //volidote user
       // navigation.navigate('Home')
    }
      
 
    const onForgetPasswordPressed=()=>{

      console.warn("onForgetPasswordPressed"); 
        //navigation.navigate('login')
    }
    const onSigInGoogle=()=>{
        console.warn("Google") 
     } 
     const onSigInApple=()=>{
        console.warn(" Apple") 
     }
     const onSingUpPressed=()=>{
        console.warn("Giriş Yap");//مايطلع التحذير
        //volidote user
       // navigation.navigate('Home')
    } 
    return (
        
        <ScrollView> 
            <View style={styles.view}>
                <Image source={Logo} style={[ styles.logo, {height:height * 0.3}]}resizeMode='contain'  />
                <UserGiris  placholder="Username" value={username} setValue={setUsername} />
                <UserGiris  placholder="Password" value={passworld} setValue={setPassword} secureTextEntry />
                <UserButton  text="Giriş Yap"  onPress={onSigInPressed} />
                <UserButton  text="Şifre Unutum"  onPress={onForgetPasswordPressed }  type="TERTIARY"/>
                <UserButton  text="Google ile Giriş Yap"  onPress={ onSigInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
                <UserButton  text="Apple ile Giriş Yap"  onPress={  onSigInApple}  bgColor="#E7EAF4" fgColor="#4765A9" /> 
                <UserButton  text="Kayit Ol"  onPress={onSingUpPressed }  type="TERTIARY" />
             
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
         //padding:80,
         width:  "70%" ,
         maxWidth:300,
         maxheight: 100 ,
         margin:50
    } ,
     
})
