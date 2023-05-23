import React from "react";

import {Text, Image} from 'react-native'
import styles from './style'

export default function BannerIntro(){

    return(
        <>


            <Image 
                style={styles.imageBanner}
                source = {require('../../img/intro.png') }
            />

            <Text style={styles.textBanner}> Nossos produtos</Text>
        </>

    )
}