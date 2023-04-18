import React from 'react-native'
import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default function CardFilms() {
    return(

        <TouchableOpacity style={styles.containerFilms}>
            <Image style={styles.imageFilms} source={require(`../../img/2.png`)} />
            <Text style={styles.titleFilms} > aa </Text>
        </TouchableOpacity>

    )
}