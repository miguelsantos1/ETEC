import { StyleSheet, Text, View, FlatList } from 'react-native';
import style from '../../components/header/style';

import Header from '../../components/header/index';
import Search from '../../components/searchBar/index';
import BannerFilmes from '../../components/bannerFilmes/index';
import Card from '../../components/cardFilmes';

import filmes from '../../data/movies';
import series from '../../data/series';
import titulo from '../../components/bannerFilmes/style';
import React,{useState, useEffect} from 'react';


export default function App() {

  document.title = 'CineDev';

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try{
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd64a3925e5bdd7e06bf0547cf14e4f8&language=pt-br');
        const data = await response.json();

        console.log(data.results)
        console.log(data.results[0].title)
        console.log(data.results[0].poster_path)
        setMovies(data.results)

      }
      
      catch(error){
        console.log("requisição falhou", error)
      }
    
    }
    getMovies();
  }, [])


  useEffect(() => {
    async function getSeries() {
      try{
      const response = await fetch(
        'https://api.themoviedb.org/3/tv/popular?api_key=fd64a3925e5bdd7e06bf0547cf14e4f8&language=pt-br');
        const data = await response.json();

        console.log(data.results)
        setSeries(data.results)

      }
      
      catch(error){
        console.log("requisição falhou", error)
      }
    
    }
    getSeries();
  }, [])

  return (
    <View style={style.container}>
      
      {/* <Header/> */}
      
      <Search/>
      <BannerFilmes/>

      <Text style={titulo.textoBanner}>Filmes</Text>
      <View style ={{width: '90%'}}>
      <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={(item) => item.id}
            
            
            renderItem={({ item }) => (
              
              <Card
              imagem={item.poster_path}
              nome={item.title}
              nota={item.vote_average}
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
            
              imagem = {item.poster_path}
              nome = {item.name}
              nota = {item.vote_average}
            
            />

          )}
        
        />
      </View>  

     

    </View>
  );
}
