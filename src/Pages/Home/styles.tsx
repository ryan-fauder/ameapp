import styled from "styled-components/native";

export const IconCircle = styled.View`
  border: 1.5px rgba(100, 100, 100, 0.2) solid;
  padding: 25px;
  flex: 1;
  justify-content: center;
  border-radius: 50px;
  align-items: center;
  margin: 5px 0;
`;
export const GroupIcon = styled.View`
  align-items: center;
  width: 20%;
`;
export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
    width: 180px;
    margin: 0 10px;
`;

export const SearchBar = styled.View`
  flex: 1;
  flex-direction: row;
  border: 1.5px rgba(100, 100, 100, 0.2) solid;
  padding: 5px 20px;
  margin: 10px 30px;
  border-radius: 100px;
  align-items: center;
`;
export const ListIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;
export const TextInputSearch = styled.TextInput`
  flex: 1;
  font-size: 20px;
`;
