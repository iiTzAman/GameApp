import { View, Text, Pressable, StyleSheet } from "react-native";
import Color from "../constants/Color";

function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Color.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 5,
    margin: 4,
    overflow: "hidden",
    elevation: 2,
  },
  buttonInnerContainer: {
    backgroundColor: Color.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontFamily:'OpenSansLight',
    color: Color.accent500,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
