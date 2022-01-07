import { View, Text, Button, Image, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import NumberContainer from "../components/NumberContainer";
import { fontStyles } from "../constants/defaultStyles";

export default GameOverScreen = (props) => {
  const restartHandler = () => {
    props.onRestart();
  };

  return (
    <View style={styles.wrapper}>
      <Text style={fontStyles.title}>Game is over!</Text>
      
      {/* Local Images: */}
      <Image source={require('../assets/favicon.png')} style={styles.localImage} resizeMode="contain" />
      
      {/* Remote Images: */}
      <Image source={require('../assets/favicon.png')} />
      
      <Text style={fontStyles.bodyText}>Your number </Text>
      <NumberContainer>{props.userNumber}</NumberContainer>
      <Text style={fontStyles.bodyText}>
        {" "}
        has been guessed after {props.rounds} rounds.
      </Text>
      <Button title="Restart" onPress={() => restartHandler()} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  localImage: {
      width: "80%",
      height: 300,
      borderRadius: 300,
      borderColor: "gray",
      borderWidth: 5,
  }
});
