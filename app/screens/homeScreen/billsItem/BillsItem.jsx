import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import MyButton from "../../../components/ui/MyButton";

const BillsItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.billIcon}>
        <MaterialIcons name={props.item.iconName} size={24} color="#6D5FFD" />
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.textInner}>
          <Text style={styles.title}>{props.item.title}</Text>
          <Text style={styles.date}>July 11, 2022</Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.CreateButton}
        underlayColor="#6D5FFD"
        onPress={() => {}}
      >
        <Text style={styles.textBtn}>Pay</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: "#EBEEF2",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
  billIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "rgba(109, 95, 253, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontFamily: "SansProBold",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 3,
    color: "#2C3A4B",
  },
  date: {
    fontFamily: "SansProReg",
    fontSize: 11,
    lineHeight: 16,
    marginTop: 3,
    color: "#858C94",
  },
  button: {
    width: 89,
    height: 47,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  CreateButton: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#6D5FFD",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 89,

    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontFamily: "SansProBold",
    fontSize: 14,
    lineHeight: 21,
    color: "#6D5FFD",
    textAlign: "center",
  },
});

export default BillsItem;
