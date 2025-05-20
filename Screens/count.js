import { StyleSheet, View, Text, Button, TouchableOpacity} from "react-native"
import { useState } from "react"

export default function Count(){

    const [contador, setContador] = useState(9);

    function Aumentar(){
        setContador(contador + 1)
    }
    function Diminuir(){
        if (contador > 0){
        setContador(contador - 1)
        }
    }

    return(
        <View> 
            <Text style={styles.title}> Meu contador</Text>
            <Text style={styles.txt}> {contador} </Text>

            <View style={styles.row} >
                <TouchableOpacity
                style={styles.button}
                    onPress={Aumentar}> 
                    + 
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress={Diminuir}> 
                    - 
                </TouchableOpacity>
            <Button style={styles.button}
                title='+'
                color={'orange'}
                onPress={Aumentar}
            />

                <Button

                title='-'
                color={'orange'}
                onPress={Diminuir}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        fontSize: 30
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400
    },
    txt:{
        fontSize:15,
        color: 'orange'
    },
    button:{
        backgroundColor: 'orange',
        width: '40%',
        textAlign: 'center',
        color: 'orange'
    }
    
})