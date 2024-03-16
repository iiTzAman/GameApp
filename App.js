import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TitleText from "./components/TitleText";

import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import Color from "./constants/Color";
import GameOverScreen from "./Screens/GameOverScreen";
import { useFonts } from "expo-font";

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }

  let screen = <StartGameScreen pickedNum={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber = {userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen/>
  }

  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSansLight': require('./assets/fonts/OpenSans-Light.ttf')
  });

  if(!fontsLoaded){
    return null
  }
 

  return (
    <LinearGradient
      colors={[Color.transparentBlack20, Color.primary700]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/dices.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.contentsContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  contentsContainer:{
    marginTop:20,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
