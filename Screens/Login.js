import { View, Text, StyleSheet,Image,Button, TextInput} from 'react-native';
import {auth} from '../controler'
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login({navigation}){

    const [nome, setNome] = useState(""); // valor do input
    const [mensagem, setMensagem] = useState(""); // valor do input

    const VerificarUser = () => {
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

    return(
        <View> 
            <br></br>
            <Image style={{width: 400, height:300}} source={{uri:"https://s3.ecompletocarros.dev/images/lojas/285/veiculos/100735/veiculoInfoVeiculoImagesMobile/vehicle_image_1652532517_d41d8cd98f00b204e9800998ecf8427e.jpeg"}} /> 
            <br></br>
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
                color={'orange'}
                onPress={() => navigation.navigate('Home')}
            /> <br></br>
            <Button
                title="Cadastrar-se"
                color={'orange'}
                onPress={() => navigation.navigate('TelaCadastros')}
            />
        </View>
    )
}


const styles =  StyleSheet.create({
    containerProfile:{
creditos: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
},
    alignSelf: 'center',
    fontSize: 30
},
tam: {
    fontSize: 30
},
txtinput: {
    borderWidth: 0.5,
    borderRadius: 5,
    
}
})