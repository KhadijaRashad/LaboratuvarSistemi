 import React from 'react'
import { Text, View, StyleSheet } from "react-native"
import userbtn from '../userbtn'
export default function SocialSinginButtons(  ) {
    const onSigInGoogle=()=>{
        console.warn("Google") 
     } 
     const onSigInApple=()=>{
        console.warn(" Apple") 
     }
    return( 
        <> 
        
        <userbtn  text="Google ile Giriş Yap"  onPress="onSigInGoogle" bgColor="#E7EAF4" fgColor="#DD4D44" />
        <userbtn  text="Apple ile Giriş Yap"  onPress="onSigInApple" bgColor="#E7EAF4" fgColor="#4765A9" />  
        </>
        );
}
 
     
 