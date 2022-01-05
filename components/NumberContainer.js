import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

export default NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.accent,
    borderWidth: 1,
    borderRadius: 7,
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    marginVertical: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
  },
});
