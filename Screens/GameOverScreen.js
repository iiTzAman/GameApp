import { View, StyleSheet, Text } from "react-native"
import TitleText from "../components/TitleText"
import PrimaryButton from "../components/PrimaryButton"
import Color from "../constants/Color"

function GameOverScreen({onPress}){
    return(
        <View style={styles.rootContainer}>
        <TitleText style={styles.titleText}>Game Over</TitleText>
        <PrimaryButton style={styles.button} onPress={onPress}>Play Again</PrimaryButton>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:40,
        fontFamily:'OpenSansBold',
        color:Color.primary700
    },
    button:{
        width:'56%',
        alignItems:'stretch'
    },
})