import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function CardText({desc}){
    return(
        <ScrollView >
            <Text style={estilos.texto}>{desc}</Text>
        </ScrollView>
    );

}

const estilos = StyleSheet.create({
    texto:{
        fontSize:20,
              

    },
});