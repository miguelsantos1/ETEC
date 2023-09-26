import React from "react";
import style from "./style";
import {Image, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Card({ nome, nota, imagem, overview }){

    const Navigation = useNavigation();

    return(

        <TouchableOpacity style = {style.containerFilmes}
            onPress={()=> Navigation.navigate('details', { imagem:imagem, nome: nome, nota: nota, overview: overview })}
        >

        <Image style={style.imagemFilmes} source = {{uri:`https://image.tmdb.org/t/p/original/${imagem}` }} />    

            <Text style = {style.tituloFilmes} >{nome}</Text>
            <Text style = {style.notaFilmes} >{nota}</Text>

        </TouchableOpacity>

    );
}