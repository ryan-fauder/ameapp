import React from "react";
import {
  Text, ScrollView, View, Image
} from "react-native";

// import { Container } from './styles';

export default function Home() {
  return (
    <ScrollView>
      <Text>Search bar</Text>
      <View>
        <Text>Pegue agora!</Text>
        <Text>Mais vendidos</Text>
        <Text>Para você</Text>
        <Text>Receba prêmios</Text>
      </View>
      <View>
        <Text>Banner de promoção</Text>
      </View>
      <View>
        <Text>Categorias</Text>
        <Text>Ver todas</Text>
      </View>
      <ScrollView horizontal>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>
        <View>
          <Text>Categoria</Text>
        </View>

      </ScrollView>
      <Text>Ofertas de hoje</Text>
      <View>
        <Text>Oferta</Text>
      </View>
    </ScrollView>
  );
}
