import { View, Text, Button } from "react-native";
import React from "react";
import { AuthContext } from "../../../App";

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
};

export default ProfileScreen;
