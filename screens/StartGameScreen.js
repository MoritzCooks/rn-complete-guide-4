import {
  View,
  Text,
  TextInput,
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

export default StartGameScreen = (props) => {
  const [enteredValue, setEnteredNumber] = useState(null);
  const [isConfirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState();

  const inputHandler = (value) => {
    setEnteredNumber(value.replace(/[^\d]/g, ""));
  };

  const resetHandler = () => {
    setEnteredNumber('');
    setConfirmed(false);
  };

  const confirmHandler = () => {
    const choseNumber = parseInt(enteredValue)
    if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
        Alert.alert("Warning", 'Number has to be between 1 and 99', [
            {
                text: "OK",
                style: "destructive",
                onPress: resetHandler
            }
        ])
        return;
    }

    setConfirmed(true)
    setConfirmedNumber(choseNumber)
    setEnteredNumber('')
  };

  let confirmedOutput

  if(isConfirmed) {
      confirmedOutput = <Text>Chosen Number: {confirmedNumber}</Text>
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.card}>
          <Text>Select a number</Text>

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
              <Button
                title="Reset"
                color={COLORS.accent}
                onPress={resetHandler}
              />
            </View>
            <View styles={styles.button}>
              <Button
                disabled={(enteredValue || 0) === 0}
                title="Confirm"
                color={COLORS.primary}
                onPress={confirmHandler}
              />
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
  },
  button: {
    // flex: 1,
    // minWidth: "45%",
    width: 74,
    // padding: "auto",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
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
    // backgroundColor: "#efefef",
    textAlign: "center",
  },
});