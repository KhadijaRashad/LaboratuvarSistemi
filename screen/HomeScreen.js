import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import UserButton from '../components/UserButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const navigation = useNavigation();

     

    const onSingInPressed = () => {
        navigation.navigate('Login');
    };

    const TestSonuclari = () => {
        navigation.navigate('TestSonuclari');
    };

    const onProfilPressed = () => {
        navigation.navigate('ProfileScreen');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.root}>
                <Text style={styles.title}>Ana Sayfa</Text>
                <UserButton  text="Tahlilerim" onPress={TestSonuclari} />
                <UserButton text="Profil Yönetimi" onPress={onProfilPressed} />
                <UserButton text="Çıkış Yap" onPress={onSingInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold", // Corrected from fontWidth to fontWeight
        color: "#051C60",
        marginBottom: 40, // Add spacing between the title and buttons
    },
});

export default SignUpScreen;
