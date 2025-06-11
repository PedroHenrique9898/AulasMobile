import { StyleSheet, View, Text, Image, Button} from "react-native"

export default function CardProduct({nome,valor,imagem, Comprar}){
    return(
        <View style={styles.card}>
            <Image style={styles.tam} source={{uri: imagem}} /> 
            <Text style={styles.txt}>{nome} - R$ {valor.toFixed(2)}</Text>
            { <Button title='Comprar' onPress={Comprar} /> }

        </View>
    )
}
// toFiexed(2) sao dois valores depois da virgula.
const styles= StyleSheet.create({
    card:{
        backgroundColor: 'orange',
        borderRadius: 8,
        padding: 10
    },
    txt:{
        fontSize: 12
        
    },
    tam:{
        height: 30,
        width: 45,
    }
})

