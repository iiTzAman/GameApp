import { Text, StyleSheet } from "react-native"
import Color from "../constants/Color"

function TitleText({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default TitleText

const styles = StyleSheet.create({
    title:{
        fontFamily:'OpenSans',
        textShadowColor:'black',
        textShadowRadius:1,
        fontSize: 22,
        padding: 15,
        textAlign:'center',
        color:Color.accent500,
        backgroundColor: Color.primary700
    }
})