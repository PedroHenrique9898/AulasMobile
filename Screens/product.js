import { StyleSheet, View, Text, FlatList} from "react-native";
import { useState, useEffect } from "react"; 
import CardProduct from "../componentes/cardProduct";
import {db} from '../Screens/controller';
import { collection, getDocs } from "firebase/firestore";

export default function Product(){

    const [produtos, setProdutos] = useState([])// Aqui ele cria um array vazio para receber os produtos do banco de dados.

    useEffect(() => { 
        async function carregarProdutos() { // aqui ele cria uma função para carregar os produtos do banco de dados.
            try{ 
                const querySnapshot = await getDocs(collection(db, "produtos")); // querySnapshot acessa o banco e vem com as informaçoes. 
                const lista = []; // aqui ele cria um array vazio para receber os produtos do banco de dados.
                // aqui ele faz um forEach para pegar os produtos do banco de dados e colocar no array lista.
                // o doc é cada produto que ele pegou do banco de dados.
                // o doc.data() pega os dados do produto.
                querySnapshot.forEach((doc) => {
                    lista.push({id: doc.id, ...doc.data() }); 
                }); // .push adiciona os produtos no array lista.
                setProdutos(lista); // aqui ele seta os produtos
                }catch(error){ // aqui ele trata o erro caso aconteça.
                    console.log('erro ao buscar o produto', error);
                }
        }
        carregarProdutos(); // aqui ele chama a função carregarProdutos. quando o componente for renderizado ele chama a função.
                           // o useEffect faz com que a função seja chamada quando o componente for renderizado.
    }, []);

    return(
        <View style={styles.containder}>
            <Text style={styles.txt}>Produtos!</Text>
            <FlatList 
            data={produtos}
            renderItem={({item}) => (
                <CardProduct
                    nome={item.nome}
                    valor={item.valor}
                    imagem={item.imagem}
                />
            )}
            keyExtractor={item => item.id}
             // criar chave unica para cada elemento do meu array
            />


        </View>
    )
}

const styles = StyleSheet.create({
    containder:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    org:{
        alignItems: 'center'
    }
})
