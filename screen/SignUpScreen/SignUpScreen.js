
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
 
import userbtn from "../../components/userbtn ";
 
import userinput from '../../components/userinput ';
import SocialSinginButtons from '../../components/SocialSinginButtons ';
import login from '../login';
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
              
            <userinput placholder="Username" value={username} setValue={setUsername} />
            <userinput placholder="Email" value={email} setValue={setEmail} />
            <userinput placholder="Password" value={Password} setValue={setPassword} secureTextEntry />
            <userinput placholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
            <userbtn text="Kayit OL" onPress="onRegisterPressed" />
            <Text style={styles.text1}> onPress={onTermOfUserPressed}Kaydolarak,
                <Text style={styles.link}>  onPress={onPrivacyPressed}Kullanım Şartlarımızı{` `}</Text>ve{` `}<Text > Gizlilik Politikamızı </Text> kabul ettiğinizi onaylıyorsunuz </Text>
            <SocialSinginButtons></SocialSinginButtons>
             
            <userbtn text="Hesapın varsa Giriş Yap" onPress="onSingInPressed" />
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
