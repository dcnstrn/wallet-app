import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import splashImg from "../../../assets/splashImage.jpg";
import MyButton from "../../components/ui/MyButton";

const SplashScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={splashImg}>
        <LinearGradient
          colors={["rgba(109, 95, 253, 0)", "rgba(9, 16, 29, 1)"]}
          style={styles.linearGradient}
        >
          <View style={{ flex: 1, justifyContent: "flex-end", padding: 24 }}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>
              FiPay: The best multifunctional digital E-Wallet of this century.
            </Text>
            <View style={styles.signBtn}>
              <MyButton
                title={"Sign In"}
                onPress={() => navigate("SignIn")}
                disable={false}
              />
            </View>
            <View>
              <TouchableHighlight
                style={styles.CreateButton}
                underlayColor="rgba(255, 255, 255, 0.1)"
                onPress={() => navigate("Register")}
              >
                <Text style={styles.textBtn}>Create an account</Text>
              </TouchableHighlight>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "SansProBold",
    fontSize: 33,
    color: "white",
    lineHeight: 50,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: "SansProReg",
    fontSize: 16,
    color: "white",
    lineHeight: 24,
    marginBottom: 28,
  },
  signBtn: {
    marginBottom: 16,
  },
  CreateButton: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 13,
    width: "100%",

    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontFamily: "SansProBold",
    fontSize: 18,
    lineHeight: 27,
    color: "white",
    textAlign: "center",
  },
});

export default SplashScreen;
