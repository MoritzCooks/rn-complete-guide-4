import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { fontStyles } from "../constants/defaultStyles";


export default MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontFamily: fontStyles.bodyText.fontFamily,
    color: "white",
  },
});