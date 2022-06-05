import styled from "styled-components/native";

export const ContainerTextInput = styled.View`
  background-color: ${(props) => props.theme.colors.white}
  
`;

export const TextInputCustom = styled.TextInput`
  border-color: gray;
  border-width: 1; 
  border-radius: 4px;
  padding: 15px;
`;
