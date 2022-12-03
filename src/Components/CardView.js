import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Image,StyleSheet,Text, ScrollView, TouchableHighlight} from 'react-native';

export default function CardView ({nome,imagem,descricao}){
    const navigation = useNavigation();
    const cardName = nome;
    const cardImage = imagem;
    const cardDesc = descricao;

    function openScreen(){
      navigation.navigate("Card",{
        cardName,
        cardImage,
        cardDesc,
      })

    }

    return(
      <TouchableHighlight onPress={openScreen} underlayColor = "white">
        <View style ={estilos.item} onClick={openScreen} >
            <Image source={imagem} style={estilos.imagem}/>
            <Text style={estilos.nome}>{nome}</Text>
        </View>
      </TouchableHighlight>
        
    )
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
      },
      imagem: {
        width: 60,
        height: 90,
        resizeMode:'cover',
      },
      nome: {
        fontSize: 18,
        lineHeight: 50,
        marginLeft: 11,
        color: "#464646",
      },

});