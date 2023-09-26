import React from 'react'
import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import style from './style';
import Stars from 'react-native-stars'
import { FontAwesome } from '@expo/vector-icons';

export default function Details(){

    const route = useRoute();


    return(
        <View style={style.container}>
            <Image style={style.img} source={{uri:`https://image.tmdb.org/t/p/original/${route.params.imagem}`}} />
            <Text style={style.title}>{route.params.nome}</Text>
            <Text style={style.description}>{route.params.overview}</Text>
            <Stars
                default={route.params.nota}
                count={10}
                half={true}
                //starSize={[style.fullStar.size, style.fullStar.size]}
                disabled={true}
                fullStar={<FontAwesome name={'star'} size={25} color={'#FFD700'} />}
                emptyStar={<FontAwesome name={'star-o'} size={25} color={'#fff'} />}
                halfStar={<FontAwesome name={"star-half"} size={25} color={'orange'} />}
            />
        </View>
    )
}