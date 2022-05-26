import styled from "styled-components/native";

export const ContainerButton = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HandleButton = styled.TouchableOpacity`
  width: 292px;
  height: 48px;
  padding: 12px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.purple1};
  margin-bottom: 10px;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.family.bold};
  font-size: ${(props) => props.theme.fonts.sizes.textForm};
  color: ${(props) => props.theme.colors.white};
`;
