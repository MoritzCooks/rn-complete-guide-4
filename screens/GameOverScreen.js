import { View, Text, Button, Image, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";
import { fontStyles } from "../constants/defaultStyles";

export default GameOverScreen = (props) => {
  const restartHandler = () => {
    props.onRestart();
  };

  return (
    <View style={styles.wrapper}>
      <Text style={fontStyles.title}>Game is over!</Text>

      {/* Local Images: */}
      {/* <Image source={require('../assets/favicon.png')} style={styles.localImage} resizeMode="contain" /> */}

      {/* Remote Images: */}
      {/* https://static.wikia.nocookie.net/kimi-ga-shine/images/5/54/GameOver.png/revision/latest?cb=20190809223532 */}
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/kimi-ga-shine/images/5/54/GameOver.png",
        }}
        style={styles.localImage}
        resizeMode="cover"
      />

      <Text style={fontStyles.boldBodyText}>
        Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
        rounds to guess your number
      </Text>
      <NumberContainer>{props.userNumber}</NumberContainer>
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
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "gray",
    borderWidth: 5,
  },
  highlight: {
    color: colors.accent,
    fontSize: 35,
  },
});
