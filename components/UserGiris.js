 import React from 'react'
import { TextInput, Text,  View, StyleSheet } from "react-native"
export default function UserGiris({ value, setValue, placeholder, secureTextEntry } ) {
 
    return( 
     <View  style={styles.container} >
          <TextInput  value={value}
            onChangeText={setValue}
            placeholder={ placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}    
            />
    </View>);
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"white", 
        width:  "100%" ,
        paddingHorizontal:10,
        borderColor:"#e8e8e8",
        //justifyContent: "center",
        //alignItems: "center",
        borderWidth:1,
        borderRadius:5,
        marginVertical:5,
    },
    input: {
         
         
    } ,
     
}) 
 