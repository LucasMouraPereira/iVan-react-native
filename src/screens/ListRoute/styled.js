import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${(props) => props.theme.colors.black};
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const WrapperList = styled.ScrollView`
  width: 100%;
`;

export const List = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.black};
`;

export const NameTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.family.medium};
  font-size: ${(props) => props.theme.fonts.sizes.textInfo};
  color: ${(props) => props.theme.colors.black};
`;
