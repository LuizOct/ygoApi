import React from "react";
import { 
    Text,
    Image,
    View,
    StyleSheet,
    Dimensions,
    ScrollView
} from "react-native";

//Components
import CardName from "../Components/CardName";
import CardText from "../Components/CardText";


const width = Dimensions.get('screen').width;

export default function Card({route}){
        const {cardName,cardImage,cardDesc} = route.params;
      
    return(
        <View style={estilos.body}>
            <View style ={estilos.header}>
                <CardName nome={cardName}/>
            </View>
            <View style={estilos.imgBody}>
                <Image source={cardImage} style={estilos.image} />
            </View>
            <ScrollView style={estilos.txtBody}>
                <CardText desc={cardDesc}/>
            </ScrollView>
            
            
            
        </View>
    )
}

const estilos = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor : '#D4B1FE',
        flexDirection: "column",
        alignContent:'center'
       
    },
    header:{
        width:"100%",
        height: 60,
        marginBottom: 90,
        
        
    },
    imgBody:{
        width:'100%',
        height:300,
        padding:10,
        
    },
    image:{
        alignSelf:'center',
        width:200,
        height: 300,
        marginBottom:10,

    },
    txtBody:{
        padding:40,
        height: 150,
        margin: 40,
        borderRadius: 4,
        backgroundColor: "#FFFFEE",
    },
    

});