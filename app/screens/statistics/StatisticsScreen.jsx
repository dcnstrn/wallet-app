import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StatisticsScreen = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <View
        style={{
          height: 280,
          backgroundColor: "#6D5FFD",
          paddingHorizontal: 24,
          paddingTop: 24,
        }}
      >
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Statistics</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 24,
  },
  headerTitle: {
    fontFamily: "SansProBold",
    fontSize: 23,
    lineHeight: 34,
    color: "#FFFFFF",
  },
});

export default StatisticsScreen;
