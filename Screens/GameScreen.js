import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import TitleText from "../components/TitleText";
import AnswerText from "../components/AnswerText";
import PrimaryButton from "../components/PrimaryButton";
import CardContainer from "../components/CardContainer";
import Color from "../constants/Color";
import { MaterialIcons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNumber = 1;
let maxNumber = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialNumber = generateRandomBetween(1, 100, userNumber);
  const [numberToDisplay, getNumberToDisplay] = useState(initialNumber);

  useEffect(() => {
    if (numberToDisplay === userNumber) onGameOver();
  }, [numberToDisplay, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && numberToDisplay < userNumber) ||
      (direction === "higher" && numberToDisplay > userNumber)
    ) {
      Alert.alert("Dont Lie", "Give the right directions!!!", [
        { text: "Back", style:'destructive' },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = numberToDisplay;
    } else {
      minNumber = numberToDisplay + 1;
    }
    const newGuess = generateRandomBetween(
      minNumber,
      maxNumber,
      numberToDisplay
    );
    getNumberToDisplay(newGuess);
  }

  return (
    <View style={styles.container}>
      <TitleText>Opponent's Guess</TitleText>
      <View style={styles.opponentGuessContainer}>
        <AnswerText>{numberToDisplay}</AnswerText>
      </View>
      <CardContainer>
        <View style={styles.directionTextContainer}>
          <Text style={styles.directionText}>Higher or Lower?</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}> 
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <MaterialIcons name="add" size={24} color="white" />            
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <MaterialIcons name="remove" size={24} color="white" />            
            </PrimaryButton>
          </View>
        </View>
      </CardContainer>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  opponentGuessContainer: {
    backgroundColor: "#ffffff8b",
  },
  directionTextContainer: {
    marginVertical: 20,
  },
  directionText: {
    fontFamily:'OpenSansLight',
    textAlign: "center",
    fontSize: 22,
    color: Color.accent600,
  },
  buttonsContainer:{
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1,
  },
});
