
import React, { useState } from 'react'
import { Text, View, StyleSheet , ScrollView } from "react-native"
import userbtn from "../components/userbtn" 
import userinput from '../components/userinput';

import userinput from '../components/userinput.js';
const SignUpScreen = ( ) => {
    const [username, setUsername] = useState("" );
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState( "");
    const [passwordRepeat, setPasswordRepeat] = useState( "");
    
    const onRegisterPressed=()=>{
       console.warn("onRegisterPressed") 
    }
    const onForgetPasswordPressed=()=>{
        console.warn("onForgetPasswordPressed") 
     }
     const onSigInGoogle=()=>{
        console.warn("Google") 
     } 
     const onSigInApple=()=>{
        console.warn(" Apple") 
     }
     const onSingUpPressed=()=>{
         console.warn( `onSingUpPressed`) 
     } 
     
      
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.view}>
            <Text style={styles.title}>Hesap Oluştur</Text>   
            <userinput  placholder="Username" value={username} setValue={setUsername} />
            <userinput  placholder="Email" value={email} setValue={setEmail} />
            <userinput  placholder="Password" value={Password} setValue={setPassword} secureTextEntry  />
            <userinput  placholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry  />
            <userbtn  text="Kayit OL"  onPress="onRegisterPressed"  />
            <Text style={styles.text1}>Kaydolarak, <Text style={styles.link}>Kullanım Şartlarımızı</Text>  ve <Text > Gizlilik Politikamızı </Text> kabul ettiğinizi onaylıyorsunuz </Text> 
            <userbtn  text="Google ile Giriş Yap"  onPress="onSigInGoogle" bgColor="#E7EAF4" fgColor="#DD4D44" />
            <userbtn  text="Apple ile Giriş Yap"  onPress="onSigInApple" bgColor="#E7EAF4" fgColor="#4765A9" />
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
    link: {
        color:""

    },
    text: {

    },
    title: {
         fontSize:24 ,
         fontWidth  :  "bold" ,
         color:"#051C60" ,
         margin:10,
    } ,
     
     
     
})
export default SignUpScreen; 
