import { StyleSheet, ImageBackground} from 'react-native';
import { View } from 'react-native';
import Home from './componentes/Screens/Home';

const image = {uri: 'https://blog.consumer.com.br/wp-content/uploads/2020/11/culin%C3%A1ria-regional-brasileira.jpg'};

export default function Test() {
  return (
    <View style={styles.container}>
      <Home/>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
}
const styles =  StyleSheet.create({
    container:{
        flex: 1, 
        padding: 20,
        justifyContent: 'space-evenly'
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
})