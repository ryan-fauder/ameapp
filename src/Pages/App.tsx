import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View
} from "react-native";
import { Link, NativeRouter } from "react-router-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Route from "./routes";
import { Bar, ContainerTitle } from "./style";

interface Props{
  key: number
}
const App = () => (
  <NativeRouter>
    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Route />
      </View>
      <Bar style={{ elevation: 10 }}>
        <Link
          to="/"
          component={({ onPress, children }) => (
            <ContainerTitle onPress={onPress}>{children}</ContainerTitle>
          )}
        >
          <Icon name="home" size={30} key={0} color="#e60014" style={{ textAlign: "center" }} />
        </Link>
        <Link
          to="/"
          component={({ children }) => (
            <ContainerTitle>{children}</ContainerTitle>
          )}
        >
          <Icon name="view-dashboard" size={30} color="#ccc" style={{ textAlign: "center" }} />
        </Link>
        <Link
          to="/"
          component={({ children }) => (
            <ContainerTitle>{children}</ContainerTitle>
          )}
        >
          <Icon name="heart" size={30} color="#ccc" style={{ textAlign: "center" }} />
        </Link>
        <Link
          to="/perfil"
          component={({ onPress, children }) => (
            <ContainerTitle onPress={onPress}>
              {children}
            </ContainerTitle>
          )}
        >
          <Icon name="account" size={30} color="#ccc" style={{ textAlign: "center" }} />
        </Link>
      </Bar>
    </SafeAreaView>
  </NativeRouter>
);
export default App;
