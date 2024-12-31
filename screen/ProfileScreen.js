import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import UserButton from '../components/UserButton';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState("Kullanıcı Adı");
    const [email, setEmail] = useState("example@email.com");
    const [profileImage, setProfileImage] = useState(null);

    const onSingInPressed = () => {
        navigation.navigate('Login');
    };

    const onDonPressed = () => {
        navigation.navigate('HomeScreen');
    };

    const handleImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.assets && response.assets.length > 0) {
                setProfileImage(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Profil Yönetimi</Text>

            <View style={styles.imageContainer}>
                {profileImage ? (
                    <Image source={{ uri: profileImage }} style={styles.image} />
                ) : (
                    <Text style={styles.imagePlaceholder}>Profil Resmi</Text>
                )}
                <Button title="Resim Yükle" onPress={handleImagePicker} />
            </View>

            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Kullanıcı Adı"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="E-Posta"
                keyboardType="email-address"
            />

            <UserButton text="Kaydet" onPress={() => console.log("Profil kaydedildi")} />
            <UserButton text="Çıkış Yap" onPress={onSingInPressed} type="TERTIARY" />
            <UserButton text="Önceki Sayfaya Dön" onPress={onDonPressed} type="TERTIARY" />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#051C60",
        marginBottom: 20,
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#ddd",
        textAlign: "center",
        lineHeight: 100,
        marginBottom: 10,
        color: "#aaa",
    },
    input: {
        width: "90%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
});

export default ProfileScreen;
