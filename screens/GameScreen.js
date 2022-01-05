import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useRef } from "react";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) return generateRandomBetween(min, max, exclude);
  else return rndNumber;
};

export default GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userNumber)
  );
  const [highestGuess, setHighestGuess] = useState(100)
  const [lowestGuess, setLowestGuess] = useState(1)

  const handleLowerButton = () => {
    if(currentGuess < highestGuess) setHighestGuess(currentGuess)
    setCurrentGuess(generateRandomBetween(lowestGuess, currentGuess, currentGuess));
    
  };
  const handleGreaterButton = () => {
    if(currentGuess > lowestGuess) setLowestGuess(currentGuess)
    setCurrentGuess(generateRandomBetween(currentGuess, highestGuess, currentGuess));
  };

  return (
    <View style={styles.wrapper}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="lower" onPress={handleLowerButton} />
        <Button title="greater" onPress={handleGreaterButton} />
      </Card>
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
