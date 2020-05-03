import React from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Link, NativeRouter } from "react-router-native";
import Route from "./routes";
import { Bar, TitleBar } from "./style";

const App = () => (
  <NativeRouter>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Bar>
        <Link
          to="/"
          component={({ onPress, children }) => (
            <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
          )}
        >
          <TitleBar>Home</TitleBar>
        </Link>
        <Link
          to="/product"
          component={({ onPress, children }) => (
            <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
          )}
        >
          <TitleBar>Product</TitleBar>
        </Link>
      </Bar>
      <Route />
    </SafeAreaView>
  </NativeRouter>
);

export default App;
