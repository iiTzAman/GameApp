import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Color from "../constants/Color";
import CardContainer from "../components/CardContainer";

function StartGameScreen({pickedNum}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputNumberHandler(someNumber) {
    setEnteredNumber(someNumber);
  }

  function invalidInputHandler() {
    setEnteredNumber("");
  }

  function confirmButtonHandler() {
    const inputNumber = parseInt(enteredNumber);

    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber >= 100) {
      Alert.alert("Invalid Input", "Enter a number between 0 - 100", [
        {
          text: "Okay",
          style: "destructive",
          onPress: invalidInputHandler,
        },
      ]);
      return;
    }
    pickedNum(inputNumber)
  }

  return (
    <View>
    <View>
      <Text style={styles.titleText}>GUESS.io</Text>
    </View>
    <CardContainer style={styles.cardContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={inputNumberHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={invalidInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </CardContainer>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  titleText:{
    fontFamily:'OpenSansBold',
    fontSize:40,
    textAlign:'center',
    color:Color.primary700,
    marginTop:40,
  },
  cardContainer:{
    marginVertical:20,
    marginHorizontal:20
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Color.accent500,
    borderBottomWidth: 2,
    color: Color.accent500,
    marginVertical: 8,
    fontFamily:'OpenSansLight',
    textAlign: "center",
  },
});
