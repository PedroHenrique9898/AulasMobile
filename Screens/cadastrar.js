import { View, Text, StyleSheet,Image,Button, TextInput} from 'react-native';
import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'; //import de uma fnção da biblioteca firebase
import { auth } from '../controller';

export default function Cadastrar({navigation}){

    const [email, setEmail] = useState("") // valor do input
    const [senha, setSenha] = useState("") // valor do input

    const CadastrarUsuario = () => {
        createUserWithEmailAndPassword(auth, email, senha) // função que cria o usuario
        .then((userCredential) => {         
        console.log("Usuario cadastrado com sucesso!!", userCredential.user.email); // mostra o email que foi logado e depois vai para a tela de login
        navigation.navigate('Telalogin')
        })
        .catch((error) => {
            console.log('erro', error.message); // mostra o erro no console
        });
    }
    return(
        <View> 
            <br></br>
            <Image style={{width: 600, height:350}} source={{uri:"https://g1.globo.com/Noticias/Carros/foto/0,,15218877,00.jpg"}} /> 
            <br></br>
           <Text style={styles.creditos}>Cadastra-se</Text>
            
            <TextInput
                style={styles.txtinput}
                placeholder= "Email" // email
                value={email} // valor do input
                onChangeText={setEmail} // função que pega o valor do input
            />
            <TextInput
                style={styles.txtinput} 
                placeholder="Senha" // senha
                value={senha} // valor do input
                onChangeText={setSenha} // função que pega o valor do input
                secureTextEntry={true} // para esconder a senha (ficam em asterisco)
            />
           <Button
                title="Cadastrar"
                color={'orange'} // cor do botão
                onPress={CadastrarUsuario} // função que chama o cadastrar usuario
            /> 
            {/* <Button
                title="Login"
                color={'orange'}
                onPress={() => navigation.navigate('Telalogin')}
                /> */}
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
