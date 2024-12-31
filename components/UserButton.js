
 import React from 'react'
import { Text, Pressable, StyleSheet } from "react-native"
export default function UserButton({ onPress, text, type="PRIMARY", bgColor, fgColor}) {
 
    return( 
        <Pressable 
        onPress={onPress} 
        style={[styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} :{} 
        ]}>
        <Text style={[styles.text,
            fgColor ? {color: fgColor} :{},
            styles[`text_${type}`]]}>{text}</Text> 
    </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {
         
        width:  "100%" ,
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        marginVertical:5,
        borderRadius:20,
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