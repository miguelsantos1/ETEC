import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BannerFilms from './src/components/BannerFilms';

// COMPONENTS
import Header from './src/components/header';
import SerchBar from './src/components/SerchBar';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Header />
      <SerchBar />
      <BannerFilms />
      
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
