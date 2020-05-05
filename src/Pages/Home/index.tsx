import React from "react";
import {
  Text, ScrollView, View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Header, Logo, SearchBar, TextInputSearch, ListIcon, IconCircle, GroupIcon
} from "./styles";

// import { Container } from './styles';
export default function Home() {
  return (
    <ScrollView>
      <Header>
        <Icon size={30} name="menu" color="#555" />
        <Logo resizeMode="contain" source={{ uri: "https://logodownload.org/wp-content/uploads/2019/10/americanas-logo.png" }} />
        <Icon size={25} name="bell-outline" color="#555" />
      </Header>
      <SearchBar>
        <Icon size={25} name="magnify" color="#646464" />
        <TextInputSearch placeholder="Pesquise nas americanas" />
      </SearchBar>
      <ListIcon>
        <GroupIcon>
          <IconCircle style={{ backgroundColor: "#009" }}>
            <Icon name="home" size={25} color="#FFF" />
          </IconCircle>
          <Text>Pegue</Text>
          <Text>agora!</Text>
        </GroupIcon>
        <GroupIcon>
          <IconCircle style={{ backgroundColor: "#009" }}>
            <Icon name="home" size={25} color="#FFF" />
          </IconCircle>
          <Text>Mais</Text>
          <Text>vendidos</Text>
        </GroupIcon>
        <GroupIcon>
          <IconCircle style={{ backgroundColor: "#009" }}>
            <Icon name="home" size={25} color="#FFF" />
          </IconCircle>
          <Text>Para</Text>
          <Text>você</Text>
        </GroupIcon>
        <GroupIcon>
          <IconCircle style={{ backgroundColor: "#009" }}>
            <Icon name="home" size={25} color="#FFF" />
          </IconCircle>
          <Text>Receba</Text>
          <Text>prêmios</Text>
        </GroupIcon>
      </ListIcon>
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
