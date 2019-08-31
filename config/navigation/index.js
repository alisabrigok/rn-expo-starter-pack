import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import { Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../../screens/HomeScreen";

import { Colors } from "../../shared/styles";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <MaterialCommunityIcons
          name={Platform.OS === "android" ? "home" : "home-outline"}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions
  }
);

const Navigator = createDrawerNavigator(
  {
    Home: HomeNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary
    }
  }
);

export default createAppContainer(Navigator);
