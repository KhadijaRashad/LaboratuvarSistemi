import React from 'react'; 
import React, { useState } from 'react'
import {   View, StyleSheet ,useWindowDimensions, ScrollView } from "react-native";
import { useNavigation} from '@react-navigation/native';
import UserButton from '../../components/UserButton';
import UserGiris from '../../components/UserGiris'; 
import SocialSinginButtons from '../../components/SocialSinginButtons ';
export default function Loginscreen({ navigation }) {
    const [username, setUsername] = useState("" );
    const [passworld, setPassword] = useState( "");
    const navigation =useNavigation();
    const onSigInPressed=()=>{
       //console.warn("Giriş Yap");
       //volidote user
       navigation.navigate('Home')
    }
    const onForgetPasswordPressed=()=>{

        //console.warn("onForgetPasswordPressed") 
        navigation.navigate('login')
     }
      
     const onSingUpPressed=()=>{
         //console.warn( `onSingUpPressed`) 
         navigation.navigate('SignUpScreen')
     } 
    const { height}=useWindowDimensions();
      
    return (
        
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.view}>
            
            <UserGiris  placholder="Username" value={username} setValue={setUsername} />
            <UserGiris  placholder="Password" value={passworld} setValue={setPassword} secureTextEntry={true} />
            <UserButton  text="Giriş Yap"  onPress={onSigInPressed} />
            <UserButton  text="Şifre Unutum"  onPress={onForgetPasswordPressed }  type="TERTIARY"/>
             <SocialSinginButtons></SocialSinginButtons>
            <UserButton  text="Kayit Ol"  onPress={onSingUpPressed }   />
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
