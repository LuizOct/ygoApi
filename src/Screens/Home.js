import React, { useState,useEffect } from 'react';
import {
      ActivityIndicator,  
      StyleSheet,
      TextInput, 
      View, 
      FlatList, 
      ScrollView} from 'react-native';
import { url } from '../Const/url';
import { useRequestData } from '../Hooks/useRequestData';


//Components
import CardView from '../Components/CardView.js'


export default function Home(){

    const [busca,setBusca] = useState("");
    const[cards,isLoadingCards,errorCards] = useRequestData(`${url}?fname=${busca}&num=50&offset=0`);
    
    


 

    const listCard = cards &&
      cards.data.map((card)=>{
        return <CardView key={card.name} nome = {card.name} imagem = {card.card_images[0].image_url} descricao = {card.desc}/>
      })
  
    return (
   
      <View>
        <View>
            <TextInput
                onChangeText = {setBusca}
                
                value={busca}
                style={estilos.input}
            />
        </View>
        
        <ScrollView>
            {isLoadingCards && <ActivityIndicator  style={estilos.activity} size="large" color = "#742CE6"/>}
            {!isLoadingCards && cards && listCard}
        </ScrollView>
       
      </View>
    );
  }

  const estilos = StyleSheet.create({
    activity:{
        alignItems: "center",
    },
    input:{
        height: 40,
        margin :12,
        borderWidth: 1,
        padding:10,
    }
  });
        