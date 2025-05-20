import { View, Text, StyleSheet,Image, TextInput} from 'react-native';
import { Button } from 'react-native';

export default function Feed(){
    return(
        
        <View>
            <br></br>
            <Image style={{width: 400, height:300}} source={{uri:"https://s3.ecompletocarros.dev/images/lojas/285/veiculos/100735/veiculoInfoVeiculoImagesMobile/vehicle_image_1652532517_d41d8cd98f00b204e9800998ecf8427e.jpeg"}} /> 
            <br></br><br></br>
            <Text style={styles.texto}>Quando estou ao volante, sou eu e a estrada, ninguém mais. É uma conexão única, uma simbiose perfeita.</Text>
           
            <Button
                title = "Siba Mais"
                color={'orange'}
            />
        </View>
       
    )
}

const styles =  StyleSheet.create({
    container:{
creditos: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
}
    }
})