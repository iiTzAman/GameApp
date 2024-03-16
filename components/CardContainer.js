import { View, StyleSheet} from "react-native"
import Color from "../constants/Color"

function CardContainer({children, style}){
    return(
        <View style={[styles.inputContainer, style]}>{children}</View>
    )
}

export default CardContainer

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        backgroundColor: Color.primary700,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center",
      },
})