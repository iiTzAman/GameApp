import { Text, StyleSheet } from "react-native"
import Color from "../constants/Color"

function TitleText({children, style}){
    return(
        <Text style={[styles.title, style]}>{children}</Text>
    )
}

export default TitleText

const styles = StyleSheet.create({
    title:{
        fontFamily:'OpenSans',
        fontSize: 22,
        padding: 15,
        textAlign:'center',
        color:Color.accent500,
    }
})