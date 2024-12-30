 import React from 'react'
 
import UserButton from './UserButton' 
export default function SocialSinginButtons(  ) {
    const onSigInGoogle=()=>{
        console.warn("Google") 
     } 
     const onSigInApple=()=>{
        console.warn(" Apple") 
     }
    return( 
        <> 
        
        <UserButton  text="Google ile Giriş Yap"  onPress={ onSigInGoogle} bgColor="#E7EAF4" fgColor="#DD4D44" />
        <UserButton  text="Apple ile Giriş Yap"  onPress={  onSigInApple}  bgColor="#E7EAF4" fgColor="#4765A9" />  
        </>
        );
}
 
     
 