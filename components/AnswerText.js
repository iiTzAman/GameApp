import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/Color";

function AnswerText({children}) {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default AnswerText;

const styles = StyleSheet.create({
    textContainer:{
        padding: 15,
        alignItems:'center'
    },
    text:{
        fontSize:50,
        fontWeight:'bold',
        color:Color.primary700
    }
})