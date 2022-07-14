import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";

const MyButton = (props) => {
  return (
    <TouchableHighlight
      disabled={props.disable}
      style={props.disable ? styles.buttonDisabled : styles.button}
      onPress={props.onPress}
      underlayColor="rgba(109, 95, 253, 0.5)"
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6D5FFD",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 14,
    width: "100%",
  },
  buttonDisabled: {
    backgroundColor: "rgba(109, 95, 253, 0.5)",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 14,
    width: "100%",
  },
  text: {
    fontFamily: "SansProBold",
    fontSize: 18,
    lineHeight: 27,
    color: "white",
    textAlign: "center",
  },
});
export default MyButton;
