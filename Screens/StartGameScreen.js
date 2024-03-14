import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
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
  }

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#460626",
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
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
    borderBottomColor: "#dbb150",
    borderBottomWidth: 3,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
