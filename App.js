import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const PlaceholderImage = require('./assets/images/pokemon-detective-pikachu.gif');
/*
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' , fontSize:42 }} >Open up App.js to start working on your app!</Text>
      <Image source={PlaceholderImage} style={styles.image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#045',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 420,
    height: 600,
    borderRadius: 18,
  },
});
