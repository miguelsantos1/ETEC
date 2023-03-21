import { LinearGradient } from 'expo-linear-gradient'
import React from 'react';
import { Image } from 'react-native';


import estilo from '../estilo';

export default function Header() {
    return(
        <LinearGradient
              colors = {['black','#FF4500']}
              style = { estilo.gradientBackground } >  
                    
              <Image
              style={estilo.image} 
              source={{ uri: "https://img.freepik.com/vetores-gratis/responsabilidades-do-departamento-de-rh-emprego-de-candidatos-recrutamento-de-candidatos-preenchimento-de-vagas-recrutador-escolhendo-o-trabalhador-adequado-pessoal_335657-2683.jpg?w=826&t=st=1678803568~exp=1678804168~hmac=134803bccb4f268ab7d121353d453ea1720037c6108cf1318fe1394486cef868" }} />
              
           </LinearGradient> 
    )
}