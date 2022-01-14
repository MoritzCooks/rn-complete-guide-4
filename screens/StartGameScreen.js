import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import COLORS from "../constants/colors";
import NumberContainer from "../components/NumberContainer";

export default StartGameScreen = (props) => {
  const [enteredValue, setEnteredNumber] = useState(null);
  const [isConfirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState();

  const inputHandler = (value) => {
    setEnteredNumber(value.replace(/[^\d]/g, ""));
  };

  const resetHandler = () => {
    setEnteredNumber("");
    setConfirmed(false);
  };

  const confirmHandler = () => {
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Warning", "Number has to be between 1 and 99", [
        {
          text: "OK",
          style: "destructive",
          onPress: resetHandler,
        },
      ]);
      return;
    }

    setConfirmed(true);
    setConfirmedNumber(choseNumber);
    setEnteredNumber("");
  };

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.confirmCard}>
        <View style={styles.confirmText}>
          <Text style={styles.text}>Chosen Number:</Text>
          <NumberContainer>{confirmedNumber}</NumberContainer>
        </View>
        <MainButton onPress={() => props.onStartGame(confirmedNumber)}>
          Start game!
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.card}>
          <Text style={styles.text}>Select a number</Text>

          <Input
            value={enteredValue}
            placeholder="Select a number"
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputHandler}
            styles={styles.input}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <MainButton
                style={{backgroundColor: COLORS.accent}}
                onPress={resetHandler}
              >
                Reset
              </MainButton>
            </View>
            <View styles={styles.button}>
              <MainButton
                disabled={(enteredValue || 0) === 0}
                style={{backgroundColor: COLORS.primary}}
                onPress={confirmHandler}
                >
                Confirm
              </MainButton>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  text: {
    fontFamily: "open-sans",
  },
  button: {
    width: 74,
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  confirmCard: {
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  textInput: {
    padding: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "darkgray",
  },
  input: {
    width: 100,
    textAlign: "center",
  },
});
