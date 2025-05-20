import { StyleSheet, View, Text, Image, } from "react-native"



export default function CardProduct({nome,valor,imagem}){
    return(
        <View style={styles.card}>
            <Image style={styles.tam} source={{uri: imagem}} /> 
            <Text style={styles.txt}>{nome} - R$ {valor.toFixed(2)}</Text>
            
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

