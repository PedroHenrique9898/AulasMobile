import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import { useCarrinho } from '../CarrinhoProvider';

export default function Carrinho() {
    const {carrinho} = useCarrinho();

    return(
        <View style={styles.container}>
            <Text style={styles.txt}> Carrinho </Text>
            <FlatList
            data={carrinho}
            renderItem={({item}) => (
                <View>
                    <Image source={{uri: item.imagem}} />
                    <Text style={styles.txtprod}> {item.nome}</Text>
                    <Text style={styles.txtprod}> R$ {item.valor} </Text>
                </View>
            )}
            />
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    txt:{
        fontSize: 12, 
    },
    txtprod:{
        borderWidth: 0.5,
        borderRadius: 5,
    }
})