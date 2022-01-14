import { View, Text, StyleSheet } from "react-native";
import { useState, useRef, useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import { fontStyles } from "../constants/defaultStyles";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) return generateRandomBetween(min, max, exclude);
  else return rndNumber;
};

export default GameScreen = (props) => {
  const [rounds, setRounds] = useState(1);
  const [currentGuess, setCurrentGuess] = useState(() => {
    return generateRandomBetween(1, 100, props.userNumber);
  });

  const lowestGuess = useRef(1);
  const highestGuess = useRef(99);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver(rounds);
    }
  }, [rounds]);

  const handleLowerButton = () => {
    setRounds(rounds + 1);
    if (currentGuess < highestGuess.current)
      highestGuess.current = currentGuess;
    setCurrentGuess(
      generateRandomBetween(lowestGuess.current, currentGuess, currentGuess)
    );
  };
  const handleGreaterButton = () => {
    setRounds(rounds + 1);
    if (currentGuess > lowestGuess.current) lowestGuess.current = currentGuess;
    setCurrentGuess(
      generateRandomBetween(currentGuess, highestGuess.current, currentGuess)
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text style={fontStyles.bodyText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={handleLowerButton}>
          <Ionicons size={24} color="white" name="md-remove" />
        </MainButton>
        <MainButton onPress={handleGreaterButton}>
          <Ionicons size={24} color="white" name="md-add" />
        </MainButton>
      </Card>
      <Text>{props.userNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
