import { StyleSheet, View, Text, FlatList, Image} from "react-native"
import { useState } from "react"
import CardProduct from "../componentes/cardProduct";

export default function Product(){

    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'Macarrão', valor: 2.78, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5atk4UxpaQ4R-h25dgxTJKsL3ib95Myp9aw&s'},
        {id: 2, nome: 'Banana', valor: 10.60, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wmTVYNuavgHYV0-40HF_3VHjZeX0IVQOcQ&s'},
        {id: 3, nome: 'abacaxi', valor: 5.90, foto: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/GEUVV5EDH5FUVEQJ6YYTV3JERA.jpeg'},
        {id: 4, nome: 'Laranja', valor: 7.50, foto: 'https://s2-g1.glbimg.com/USZ4Y100GXKjzcUm5wW92kxCWxk=/0x0:3456x2304/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/0/3/MVsQbdRneVJxhmmLZABw/laranja-sheraz-shaikh-zx3kcu2kw9e-unsplash.jpg'},
        {id: 5, nome: 'Maçã', valor: 9.70, foto: 'https://fsp.usp.br/eccco/wp-content/uploads/2022/11/matheus-cenali-wXuzS9xR49M-unsplash-1200x900.jpg'},
        {id: 6, nome: 'Jabuticaba', valor: 11.50, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqbZcXBO3xKmY2Q7GLdMryFBGf6iNZvObAQ&s'},
        {id: 7, nome: 'Melão', valor: 20.00, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-920eVFYgqepzN1kxQmL99XraWw1uoQ40zw&s'},
        {id: 8, nome: 'Mamão', valor: 10000.00, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXoVVEcIUx17LD2bEwvKwhXfyNvpjH1-5Gw&s'},
        {id: 9, nome: 'Ameixa', valor: 888.00, foto: 'https://cdn.awsli.com.br/2500x2500/18/18885/produto/158985432/3d129c228c.jpg'},
        {id: 10, nome: 'Acerola', valor: 5666.00, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_x_ROtP6otJWaDraa2WdQcAiXEyAYQI-2g&s'}
    ])
    return(
        <View style={styles.containder}>
            <Text style={styles.txt}>Produtos!</Text>
            {/* {produtos.map((item) => (
                <View style={styles.org}>
                <Text> {item.id} </Text>
                 <Text>{item.nome} </Text>
                 <Text> R$: {item.valor.toFixed(2)} </Text>
                </View>      
            ))} */}
            <FlatList 
            data={produtos}
            renderItem={({item}) => (
            // <View style={styles.card}>
            //   <Image style={styles.tam} source={{uri: item.foto}}/> 
            //   <Text >{item.id} - {item.nome} - R$ {item.valor} </Text>
            //   <Text> ------------------------------ </Text>
            // </View>
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
    containder:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    org:{
        alignItems: 'center'
    },

})
