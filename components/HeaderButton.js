import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../shared/styles";

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={MaterialCommunityIcons}
    iconSize={23}
    color={Platform.OS === "android" ? "white" : Colors.primaryColor}
  />
);

export default CustomHeaderButton;
