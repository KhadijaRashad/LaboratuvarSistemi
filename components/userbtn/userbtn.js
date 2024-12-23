
 import React from 'react'
import { Text, Pressable, StyleSheet } from "react-native"
export default function userbtn({ onPress, text, type="PRIMARY" }) {
 
    return( 
     <Pressable onPress={onPress} style={[styles.container, styles[` container_${type}`]]}>
        <Text style={[styles.text, styles[` text_${type}`]]}>{text}</Text> 
    </Pressable>);
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#3b71f3", 
        width:  "100%" ,
         padding:15,
         
        justifyContent: "center",
        alignItems: "center",
         
        marginVertical:5,
    },
    container_PRIMARY:{
        backgroundColor:"#3b71f3",

    },
    container_TERTIARY:{

    },
   text: {
        fontWeight:"bold",
        color:"white"
     } ,
     text_TERTIARY: {
         
        color:"gray"
     } ,
     
}) 