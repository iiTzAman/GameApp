import { StyleSheet, Text, View } from "react-native"
import Color from "../constants/Color"

function LogRow({guessCount, guessNumber}){
    return(
        <View style={styles.logContainer}>
            <Text style={styles.text}>Guess# {guessCount}</Text>
            <Text style={styles.text}>{guessNumber}</Text>
        </View>
    )
}

export default LogRow

const styles = StyleSheet.create({
    logContainer:{
        width:'100%',
        backgroundColor:Color.primary600,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        borderRadius:5
    },
    text:{
        textAlign:'center',
        fontFamily:'OpenSans',
        fontSize:20,
        color:Color.primary400
    }
})