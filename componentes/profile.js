import { View, Text, StyleSheet,Image, TextInput} from 'react-native';
import { Button } from 'react-native';

export default function Profile(){
    return(
        <View style={styles.containerProfile}> 
            <Text>Olá mundo!!</Text>
            <br></br>
            <Text>testee</Text>
            <br></br>
            <Button>CLIQUE AQUI!</Button>
            <br></br>
            <Image style={{width: 200, height:200}} source={{uri:"https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2024/07/04/1275438437-academia.jpg"}} /> 
            <br></br>
            <Image style={{width:200, height:200}} source={require('../assets/images.jpg')} />
        
            <Text style={styles.creditos}>creditos</Text>
            
            <TextInput
            style={styles.txtinput}
            placeholder= "nome"
            placeholderTextColor={'BLACK'}
            />
            
            <TextInput
            style={styles.txtinput}
            placeholder='mensagem'
            placeholderTextColor={'BLACK'}
            />
            <Button         
            title="Enviar"
            color={'green'}
            
            />

        </View>
    )
}

export function Galerry(){
    return(
        <View style={styles.containerGalerry}>
            <Text>Essa é a minha galeria!!</Text>
        </View>
    )
}

export function Artist(){
    return(
        <View style={styles.containerArtist}>
            <Text>Esses são os artistas!</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    containerProfile:{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerArtist:{
        flex: 2,
        backgroundColor: 'orange'
    },
    containerGalerry:{
        flex: 3,
        backgroundColor: 'green'
    },
    creditos: {
        alignSelf: 'center',
        fontSize: 20
    },
    tam: {
        fontSize: 20
    },
    txtinput: {
        borderWidth: 0.5,
        borderRadius: 5,
    }
})
