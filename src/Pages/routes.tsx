import React from "react";
import { Route } from "react-router-native";
import Home from "./Home";
import Product from "./Product";
import Perfil from "./Perfil";
// import Login from "./Login";

export default function Routes() {
  return (
    <>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/perfil" render={() => <Perfil />} />
      <Route path="/product" render={() => <Product number={10} />} />
    </>
  );
}
