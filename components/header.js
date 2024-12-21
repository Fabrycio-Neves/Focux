import React from "react"
import {View,Text,StyleSheet}from "react-native"


export default function Header(){
return(
        <View style={styles.container}>
          <Text style={styles.texto}>Tasks </Text>

        </View>

    )
}

const styles=StyleSheet.create({

    container:{
        paddingVertical:20,
        backgroundColor:'#f2f2f2',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    texto:{
        fontWeight:'bold',
        fontSize:30,
        color:'#000000',
        textAlign:'center',
        marginTop:80,
      
     
      
    }
})
