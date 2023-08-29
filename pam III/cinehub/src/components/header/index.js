import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import style from "./style";

export default function Header(){
    return(
        <View style = {style.viewHeader}>
            <TouchableOpacity>
                <Feather name="menu" size={34} color="white" />
            </TouchableOpacity>    
                <Text style = {style.textHeader}>CineDev</Text>
        </View>
    )
}