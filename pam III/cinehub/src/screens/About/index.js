import React from 'react'
import {View, Text} from 'react-native'
import style from "./style";

export default function About(){
    return(
        <View style= {style.container}>
            <Text style={style.textAbout}>Essa é a tela SOBRE do aplicativo</Text>
        </View>
    )
}