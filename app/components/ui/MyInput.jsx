import { StyleSheet, TextInput, Text, View } from "react-native";
import React from "react";

const MyInput = (props) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{props.text}</Text>
        {!props.value && (
          <Text style={{ color: "rgba(218, 20, 20, 1)" }}>*</Text>
        )}
      </View>
      <TextInput
        style={styles.input}
        showSoftInputOnFocus={true}
        onChangeText={props.onChange}
        value={props.value}
        keyboardType="default"
        secureTextEntry={props.isPass}
        autoCapitalize={"none"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A5ABB3",
    borderRadius: 8,

    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,

    width: "100%",
    height: 48,
  },
  text: {
    fontFamily: "SansProBold",
    marginBottom: 8,
    marginLeft: 16,
    fontSize: 16,
    color: "#2C3A4B",
  },
});

export default MyInput;
