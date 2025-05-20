import { StyleSheet, View, Text, Image, FlatList} from "react-native"



export default function CardProduct({id,nome,valor,foto}){
    return(
        <View style={styles.card}>
            <Image style={styles.tam} source={{uri: foto}} />
            <Text style={styles.txt}> {id}  {nome} - R$ {valor.toFixed(2)}</Text>
            
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

