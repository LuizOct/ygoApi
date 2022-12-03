import React from "react";
import { StyleSheet,Text, View } from "react-native";

export default function CardName({nome}){
    return(
        
        <Text style={estilos.texto}>
            {nome}
        </Text>
        
    )
}

const estilos = StyleSheet.create({
   
    texto:{
        width: '100%',
        position:'absolute',
        fontSize: 40,
        lineHeight: 60,
        color: "white",
        fontWeight: 'bold',
        backgroundColor: '#631F94',
        textAlign:'center',
        
        
        

    }
});