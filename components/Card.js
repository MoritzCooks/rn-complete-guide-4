import { View, StyleSheet } from "react-native";

export default Card = (props) => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "gray",
    padding: 20,

    // ios shadow
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
    },

    // android shadow
    elevation: 5,
  },
});