import React from 'react';
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import UserButton from '../../components/UserButton';
import UserGiris from '../../components/UserGiris';  
import SocialSinginButtons from '../../components/SocialSinginButtons ';
import login from '../../screen/login';  
const navigation =useNavigation();
 
const SignUpScreen = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const onRegisterPressed = () => {
        console.warn("onRegisterPressed")
        //حق الايميل
    };
     

    const onSingInPressed = () => {
        //console.warn(`onSingInPressed`)
        navigation.navigate('login')
    };
    const onTermOfUserPressed = () => {
        console.warn(`onTermOfUserPressed`);
    };
 
    const onPrivacyPressed = () => {
        console.warn(`onPrivacyPressed`);
    };


return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.view}>
            <Text style={styles.title}>Hesap Oluştur</Text>
              
            <UserGiris placholder="Username" value={username} setValue={setUsername} />
            <UserGiris placholder="Email" value={email} setValue={setEmail} />
            <UserGiris placholder="Password" value={Password} setValue={setPassword} secureTextEntry />
            <UserGiris placholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
            <UserButton text="Kayit OL" onPress= {onRegisterPressed} />
            <Text style={styles.text1}> onPress={onTermOfUserPressed}Kaydolarak,
                <Text style={styles.link}>  onPress={onPrivacyPressed}Kullanım Şartlarımızı{` `}</Text>ve{` `}<Text > Gizlilik Politikamızı </Text> kabul ettiğinizi onaylıyorsunuz </Text>
            <SocialSinginButtons></SocialSinginButtons>
             
            <UserButton text="Hesapın varsa Giriş Yap" onPress={ onSingInPressed} />
        </View>
    </ScrollView>



   );
    
}
const styles = StyleSheet.create({
    view: {

        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    link: {
        color: "#Fdb875"

    },
    text: {
        color: " gray",
        marginVertical: 10,

    },
    title: {
        fontSize: 24,
        fontWidth: "bold",
        color: "#051C60",
        margin: 10,
    },



})
export default SignUpScreen; 
