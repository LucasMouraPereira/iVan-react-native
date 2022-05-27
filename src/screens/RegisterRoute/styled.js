import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bg};
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.family.bold};
    font-size: ${props => props.theme.fonts.sizes.title};
    color: ${props => props.theme.colors.purple2};
    text-align: center;
    line-height: 48px;
`;

export const SubTitle = styled.Text`
font-family: ${props => props.theme.fonts.family.bold};
font-size: ${props => props.theme.fonts.sizes.subTitle};
color: ${props => props.theme.colors.purple2};
text-align: center;
line-height: 48px;
`;
