/* eslint-disable global-require */
import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Container, styles, Background, StatusControl, Status,
  UserView, UserInfo, UserImage, UserController, UserControllerName,
  Badge, AccountControl, AccountElementControl
} from "./style";

const dataAccountControl = [
  { id: 1, name: "Pedidos", "name-icon": "shopping" },
  { id: 2, name: "Vales", "name-icon": "ticket" },
  { id: 3, name: "Gift Card", "name-icon": "wallet-giftcard" },
  { id: 4, name: "Endereços", "name-icon": "map-marker-radius" },
  { id: 5, name: "Cartão americanas", "name-icon": "credit-card" },
  { id: 6, name: "Dúvidas", "name-icon": "help-circle" },
];
const Perfil: React.FC = () => (
  <Background>
    <UserView>
      <Icon name="menu" color="#FFF" size={30} />
      <UserInfo>
        <UserImage>
          <Icon name="account" color="#FFF" size={70} />
        </UserImage>
        <UserController>
          <UserControllerName>
            <Text style={styles.username}>Nome Sobrenome</Text>
            <Text style={styles.useremail}>gmail.com@gmail.com</Text>
          </UserControllerName>
          <Icon name="pencil" color="#FFF" size={30} />
        </UserController>
      </UserInfo>
    </UserView>
    <Container>
      <StatusControl>
        <Badge>
          <Text style={styles.TextBadge}>Insígnia</Text>
          <Image resizeMode="contain" style={styles.image} source={require("../../assets/diamante.png")} />
          <Text style={styles.TextColoredBadge}>Cliente Diamante</Text>
        </Badge>
        <View>
          <Status>
            <Icon size={40} name="checkbox-multiple-blank-circle" color="#F6DE00" />
            <Text style={styles.statustext}>1000 moedas</Text>
          </Status>
          <Status>
            <Icon size={40} name="chart-bubble" color="#00A2FF" />
            <Text style={styles.statustext}>350 exp</Text>
          </Status>
        </View>
      </StatusControl>
      <AccountControl>
        <AccountElementControl key={0}>
          <Icon name="clipboard-check" size={70} color="#ccc" />
          <Text style={styles.accountElementText}>Missões</Text>
        </AccountElementControl>
        {dataAccountControl.map((data) => (
          <AccountElementControl key={data.id}>
            <Icon name={data["name-icon"]} size={70} color="#ccc" />
            <Text style={styles.accountElementText}>{data.name}</Text>
          </AccountElementControl>
        ))}
      </AccountControl>
    </Container>
  </Background>
);

export default Perfil;
