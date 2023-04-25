import React from 'react-native'
import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default function CardFilms(props) {
    return(

        <TouchableOpacity style={styles.containerFilms}>
            <Image 
            style={styles.imageFilms}
            source = {require(`../../img/${ props.image }`)}
             />

            <Text style={styles.titleFilms} > { props.title } </Text>
            <Text style={styles.titleFilms} > { props.feedback } </Text>
        </TouchableOpacity>

    )
}