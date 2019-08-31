import React from "react";
import { Provider } from "react-redux";
import store from "./config/redux";
import Navigator from "./config/navigation";
import { useScreens } from "react-native-screens";

useScreens();

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
