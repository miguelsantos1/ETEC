import { LinearGradient} from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import InputEmail from './src/components/Input/InputEmail';
import InputSenha from './src/components/Input/InputSenha';

import { Ionicons } from '@expo/vector-icons'

import estilo from './src/estilo';

import Header from './src/components/header';
import Footer from './src/components/footer';

 export default function App() { 
  return ( 
       
        <View style={estilo.container}>
          

        <Header />


          { /* View com entrada para dados **/  }

          <View style={estilo.box}>


           <InputEmail />
           <InputSenha />
           

            <TouchableOpacity style={{width: '80%'}} >
              <LinearGradient
              colors={['#d2691e', '#ff4500']}
              style={estilo.button}>

                <Text style={estilo.text}> Entrar </Text>

              </LinearGradient>


            </TouchableOpacity>

            <Footer />

          </View>  

        </View>
  );
}