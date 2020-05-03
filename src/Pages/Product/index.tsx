import React from "react";
import { View, Text } from "react-native";

interface Props{
  number: number
}
// import { Container } from './styles';

export default function Product({ number }:Props) {
  return (
    <View>
      <Text>{number}</Text>
      <Text>Product</Text>
    </View>
  );
}
