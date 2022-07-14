import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const NavItem = ({ item, index, onClickMenu, activeIndex }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        width: "20%",
      }}
      onPress={() => onClickMenu(item.title, index)}
    >
      <MaterialIcons
        name={item.name}
        size={24}
        color={index === activeIndex ? "#6D5FFD" : "#A5ABB3"}
      />
    </TouchableOpacity>
  );
};

export default NavItem;
