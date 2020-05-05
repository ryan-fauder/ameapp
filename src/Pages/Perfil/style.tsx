import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Colors } from "../../Styles";

export const styles = StyleSheet.create({
  username: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "700"
  },
  useremail: {
    fontSize: 18,
    color: "#fff"
  },
  TextBadge: {
    fontSize: 20,
    fontWeight: "700"
  },
  TextColoredBadge: {
    fontSize: 20,
    fontWeight: "700",
    color: "#00c8f0"
  },
  statustext: {
    fontSize: 18,
    marginLeft: 5,
  },
  image: {
    maxWidth: 100,
    maxHeight: 100,
  },
  accountElementText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ccc",
    textAlign: "center"
  }
});

export const Background = styled.ScrollView`
  background-color: ${Colors.primary};
  flex: 1;
`;

export const UserView = styled.View`
  justify-content: flex-end;
  padding: 20px;
`;
export const UserInfo = styled.View`
  padding: 20px;
  align-items: center;
  
`;

export const UserImage = styled.View`
  background-color: #000;
  border-radius: 100px;
  padding: 20px;
  border: 4px #fff solid;
`;

export const UserController = styled.View`
 margin: 10px 0 0 0;
 align-items: flex-start;
 flex-direction: row;
`;

export const Container = styled.ScrollView`
  background-color: #FFF;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 10px 20px;
`;
export const Status = styled.View`
 margin: 10px 0 0 0;
 align-items: center;
 justify-content: flex-start;
 flex-direction: row;
`;

export const UserControllerName = styled.View`
  align-items: center;
  margin: 0 10px;
`;

export const Badge = styled.View`
  align-items: center;
  margin: 0 10px;
`;
export const StatusControl = styled.View`
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  max-height: 180px;
`;
export const AccountControl = styled.View`
  margin: 10px 0 0 0;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;
export const AccountElementControl = styled.View`
  align-items: center;
  width: 45%;
  margin: 15px 0;
`;
