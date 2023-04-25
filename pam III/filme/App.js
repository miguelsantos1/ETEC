import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ProgressViewIOSComponent } from 'react-native';
import BannerFilms from './src/components/BannerFilms';
import Films from './src/data/movies'

// COMPONENTS
import Header from './src/components/Header';
import SerchBar from './src/components/SerchBar';
import CardFilms from './src/components/CardFilmes';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Header />
      <SerchBar />
      <BannerFilms />

      <View style={{width: "90%"}}>
      
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator = {false}
      data={Films}
      keyExtractor = {(item) => item.id }
      renderItem = { ({item}) => (

        <CardFilms 
        title = {item.name}
        feedback = {item.feedback}
        image = {item.image}
        />
        
      ) }

      />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
  },
});
