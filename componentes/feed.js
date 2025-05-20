import { View, Text, StyleSheet, FlatList} from 'react-native';
import { useState } from "react"
import CardProduct from './cardProduct';

export default function Feed(){
    const [carros, setCarros] = useState([
        {id: 1, nome: 'Celta', valor:20.000, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7x_8iFYHMFNfXvLedVV42dEuh1d-jQSZD3A&s'},
        {id: 2, nome: 'veloster', valor:40.000, foto: 'https://s3.ecompletocarros.dev/images/lojas/154/veiculos/125824/veiculoInfoVeiculoImagesMobile/vehicle_image_1671463624_f3ccdd27d2000e3f9255a7e3e2c48800.jpeg'},
        {id: 3, nome: 'Corola', valor:90.000, foto: 'https://carroeletrico.com.br/wp-content/uploads/2023/09/Toyota-Corolla-Cross-Hybrid-branco-frente-modelo-2021-2.jpg'},
        {id: 4, nome: 'Onix', valor:45.000, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SEp6FB4CUkWE56CDYXwt0evRHxmwF39OZg&s'},
        {id: 5, nome: 'Creta', valor:200.000, foto: 'https://i.ytimg.com/vi/wqQjm_Jg0Ic/sddefault.jpg'},
    ])
    return(
        <View style ={styles.card}>
            <Text>Pagina de carros!</Text>
            <FlatList 
            data={carros}
            renderItem={({item}) => (
            <CardProduct
            id={item.id}
            nome={item.nome}
            valor={item.valor}
            foto={item.foto}
            />
            )}
            keyExtractor={item => item.id} // criar chave unica para cada elemento do meu array
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'orange',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        alignItems: 'center'
    },
    txt:{
        fontSize: 12, 
    },
})






