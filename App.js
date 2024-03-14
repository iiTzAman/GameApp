import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#72063c", "#dbb150"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/dices.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
