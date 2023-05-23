import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerIntro from './src/components/BannerIntro';
import Header from './src/components/Header';
import CardProd from './src/components/CardProduto';
import PRODUTOS from './src/components/data/produtos';
import SERVICOS from './src/components/data/servicos';
import Title from './src/components/Title';
import CardServ from './src/components/CardServ';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <BannerIntro />
      <View style={{width:'90%'}}>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        data = {PRODUTOS}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
          <CardProd
          
          name = {item.name}
          price = {item.price}
          tamanho = {item.tamanho}
          image = {item.image}
          />
        )}
      />

      <Title/>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        data = {SERVICOS}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
          <CardServ
          
          name = {item.name}
          price = {item.price}
          image = {item.image}
          />
        )}
      />
      </View>
      
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEFF',
    alignItems: 'center',
    
  },
});
