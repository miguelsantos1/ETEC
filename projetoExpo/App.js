import { LinearGradient} from 'expo-linear-gradient'
;import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

import { Ionicons, AntDesign } from '@expo/vector-icons'

import estilo from './src/estilo';

 export default function App() { 
  return (    
        <View style={estilo.container}> 
           <LinearGradient
              colors = {['black','#FF4500']}
              style = { estilo.gradientBackground } >        
              
           </LinearGradient>   

          <Image
          style={estilo.image} 
          source={{ uri: "https://img.freepik.com/vetores-gratis/responsabilidades-do-departamento-de-rh-emprego-de-candidatos-recrutamento-de-candidatos-preenchimento-de-vagas-recrutador-escolhendo-o-trabalhador-adequado-pessoal_335657-2683.jpg?w=826&t=st=1678803568~exp=1678804168~hmac=134803bccb4f268ab7d121353d453ea1720037c6108cf1318fe1394486cef868" }} />

          { /* View com entrada para dados **/  }

          <View style={estilo.box}>


            <View style={estilo.viewIcons}>  
              <AntDesign name="user" size={24} color="black"/>
              <TextInput style={estilo.input} placeholder='E-mail' />
            </View>

            <View style={estilo.viewIcons}> 
              <Ionicons name="key" size={24} color="black" />
              <TextInput style={estilo.input}  placeholder='Senha' />
            </View>

            <TouchableOpacity style={{width: '80%'}} >
              <LinearGradient
              colors={['#d2691e', '#ff4500']}
              style={estilo.button}>

                <Text style={estilo.text}> Entrar </Text>

              </LinearGradient>


            </TouchableOpacity>

          </View>  

        </View>
  );
}