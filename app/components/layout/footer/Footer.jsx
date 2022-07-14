import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { menu } from "./menu";
import NavItem from "./NavItem";

const Footer = ({ navigate }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickMenu = (title, index) => {
    navigate(title);

    setActiveIndex(index);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",

        paddingBottom: 32,
        paddingTop: 24,
      }}
    >
      {menu.map((item, index) => (
        <NavItem
          index={index}
          key={item.title}
          item={item}
          onClickMenu={onClickMenu}
          activeIndex={activeIndex}
        />
      ))}
    </View>
  );
};

export default Footer;
