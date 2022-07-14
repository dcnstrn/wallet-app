import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MyInput from "../../components/ui/MyInput";
import { AuthContext } from "../../../App";
import MyButton from "../../components/ui/MyButton";
import Logo from "../../components/ui/Logo";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { navigate } = useNavigation();
  const { signIn } = React.useContext(AuthContext);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 24,
        }}
      >
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Create a new account </Text>
        </View>

        <MyInput
          value={username}
          onChange={(val) => setUsername(val)}
          isPass={false}
          text={"Full Name"}
        />

        <MyInput
          value={email}
          onChange={(val) => setEmail(val)}
          isPass={false}
          text={"Email or Phone Number"}
        />

        <MyInput
          value={password}
          onChange={(val) => setPassword(val)}
          isPass={true}
          text={"Password"}
        />
        <Text style={styles.checkbox}>Remember me</Text>
        <MyButton
          title="Create Account"
          onPress={() => navigate("SignIn")}
          disable={!(!!email && !!password && !!username)}
        />

        <View style={styles.textWrapper}>
          <Text style={styles.underText}>Don't have an account? </Text>
          <Text
            style={styles.secondaryBtnSign}
            onPress={() => navigate("SignIn")}
          >
            Sign in
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: 70,
    left: 24,
  },
  titleWrapper: {
    flexDirection: "row",
    marginBottom: 40,
  },
  titleText: {
    fontFamily: "SansProBold",
    fontSize: 33,
    lineHeight: 50,
    color: "#2C3A4B",
  },
  titleLogo: {
    fontFamily: "SansProBold",
    fontSize: 33,
    lineHeight: 50,
    color: "#6D5FFD",
  },
  checkbox: {
    fontFamily: "SansProBold",
    fontSize: 14,
    lineHeight: 21,
    color: "#2C3A4B",
    marginBottom: 20,
  },
  textWrapper: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  underText: {
    fontFamily: "SansProReg",
    fontSize: 16,
    lineHeight: 24,
    color: "#858C94",
  },
  secondaryBtnSign: {
    fontFamily: "SansProBold",

    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    color: "#6D5FFD",
  },
});

export default Register;
