import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header'
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  const [selectedUserNumber, setSelectedUserNumber] = useState()

  const startGameHandler = (selectedNumber) => {
    setSelectedUserNumber(selectedNumber)
  }

  let content = selectedUserNumber ? <GameScreen /> : <StartGameScreen onStartGame={startGameHandler}/>

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
