import { View, Text, StyleSheet,Image,Button, TextInput, ImageBackground,} from 'react-native';

export default function Home(){
    return(
        <Text style={styles.containerTest}>A comida servida em restaurantes pode variar de acordo com o tipo de estabelecimento, mas alguns pratos são comuns. 
        Comidas mais vendidas em restaurantes Feijoada, Churrasco, Pizza, Pastel, Coxinha, Acarajé, Moqueca, Tapioca.
        Estrutura de um cardápio Entrada, Aperitivos, Prato principal, Bebidas, Sobremesa. Opções de comida para comer à noite Caldos, Sanduíches, Omeletes, Crepiocas, Legumes. </Text>

    )
}


const styles =  StyleSheet.create({
    containerTest:{
        flex:1,

    }

})
