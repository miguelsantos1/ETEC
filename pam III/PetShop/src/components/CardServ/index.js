import React from 'react-native'
import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default function CardServ(props) {
    return(

       
       <TouchableOpacity style={styles.products}>
            <Image 
            style={styles.imgProd}
            source = {require(`../../img/${ props.image}`)}
             />

            <Text style={styles.nameProd} > { props.name } </Text>
            <Text style={styles.infoProd} > { props.price } </Text>


        </TouchableOpacity>


    )
}