import { StyleSheet, Text, View, FlatList } from 'react-native';
import style from '../../components/header/style';

import Header from '../../components/header/index';
import Search from '../../components/searchBar/index';
import BannerFilmes from '../../components/bannerFilmes/index';
import Card from '../../components/cardFilmes';

import filmes from '../../data/movies';
import series from '../../data/series';
import titulo from '../../components/bannerFilmes/style';

export default function App() {

  document.title = 'CineDev';

  return (
    <View style={style.container}>
      
      {/* <Header/> */}
      
      <Search/>
      <BannerFilmes/>

      <Text style={titulo.textoBanner}>Filmes</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {filmes}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              nome = {item.nome}
              nota = {item.nota}
              imagem = {item.imagem}
            
            />

          )}
        
        />
      </View>  

      <Text style={titulo.textoBanner}>Séries</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {series}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
            
              nome = {item.nome}
              nota = {item.nota}
              imagem = {item.imagem}
            
            />

          )}
        
        />
      </View>  

    </View>
  );
}
