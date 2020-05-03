import styled from "styled-components/native";
import { Colors, Typography, Spacing } from "../Styles";

export const Bar = styled.View`
    flex-direction: row;
    justify-content: space-around;
    background-color: ${Colors.primary};
    min-height: 50px;
`;
export const TitleBar = styled.Text`
    font-family: ${Typography.fonts.primary};
    font-size: ${Typography.size.md}px;
    margin: ${Spacing.margin.md}px;
    flex: 1;
    color: #FFF;
    border: 2px solid #000;
`;
