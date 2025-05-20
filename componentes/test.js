import { View, Text, StyleSheet,Image,Button, TextInput} from 'react-native';

export default function Test(){
    return(
        <View style={styles.container}>

            <Text style={styles.tam}>Academia</Text>

            <View style={styles.containerImg}> 
            <Image style={styles.img} 
            source={{uri:"https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2024/07/04/1275438437-academia.jpg"}} />
            </View>
            
            <Text style={styles.txt} > exercicios da academia</Text>
        
            <View style={styles.de_lado}>
            <Image style={styles.img}
            source={{uri: "https://academiaad3.com.br/wp-content/uploads/2024/06/3-630x630.jpg"}}/>
           <Image style={styles.img} source={require('../assets/foto.jpg')} /> 
            </View>
            
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
                color={'blue'}
            />

                
           

        </View>
    )
}
const styles =  StyleSheet.create({
    containerTest:{
        flex: 1,
        backgroundColor:rgb(212, 45, 45),
        padding: 20,
        justifyContent: 'space-evenly'
    },
 
    containerImg:{
        alignItems: 'flex-end'
    },
    
    img: {
        width:200,
        height:200,
    },

    de_lado: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    txt: {
        alignSelf: 'flex-end',
        fontSize: 20
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
