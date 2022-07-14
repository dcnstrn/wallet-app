import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../../../App";
import Card from "../../components/ui/Card";
import { bills } from "./billsItem/billsData";
import BillsItem from "./billsItem/BillsItem";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.containerHeader}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerTitle}>Good morning, John!</Text>
            <MaterialIcons name="history" size={24} color="#6D5FFD" />
          </View>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Card balance="1299.15" number="8399" type="1" />
            </View>
            <View style={styles.card}>
              <Card balance="600.00" number="6022" type="0" />
            </View>
            <View style={styles.card}>
              <Card balance="0.00" number="0129" type="1" />
            </View>
          </ScrollView>
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.subtitleWrapper}>
            <Text style={styles.subtitle}>Upcomming bill</Text>
            <Text style={styles.secondaryBtnSign}>See All</Text>
          </View>
          <View style={{ height: "60%", marginBottom: 60, paddingBottom: 20 }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: 50 }}
            >
              {bills.map((item) => (
                <BillsItem item={item} key={item.id} />
              ))}
            </ScrollView>
          </View>

          <StatusBar barStyle="dark-content" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  containerHeader: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  containerBottom: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 44,
    marginBottom: 24,
  },
  headerTitle: {
    fontFamily: "SansProBold",
    fontSize: 28,
    lineHeight: 42,
    color: "#2C3A4B",
  },
  subtitleWrapper: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: "SansProBold",
    fontSize: 20,
    lineHeight: 30,
    color: "#2C3A4B",
  },
  secondaryBtnSign: {
    fontFamily: "SansProBold",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    color: "#6D5FFD",
  },
  card: {
    marginLeft: 24,
  },
});

export default HomeScreen;
