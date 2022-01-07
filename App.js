import { StyleSheet, Text, View } from "react-native";
import { useState, useRef } from "react";
import * as Font from "expo-font";

import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [selectedUserNumber, setSelectedUserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(e) => console.log(e)}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    setSelectedUserNumber(selectedNumber);
    setRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setRounds(numberOfRounds);
  };

  const restartGameHandler = () => {
    setRounds(0);
    setSelectedUserNumber("");
  };

  let content = selectedUserNumber ? (
    <GameScreen userNumber={selectedUserNumber} onGameOver={gameOverHandler} />
  ) : (
    <StartGameScreen onStartGame={startGameHandler} />
  );

  if (rounds > 0) {
    content = (
      <GameOverScreen
        userNumber={selectedUserNumber}
        rounds={rounds}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
