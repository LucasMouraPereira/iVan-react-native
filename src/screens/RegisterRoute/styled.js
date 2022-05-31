import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.family.bold};
  font-size: ${(props) => props.theme.fonts.sizes.title};
  color: ${(props) => props.theme.colors.purple2};
  text-align: center;
  line-height: 48px;
  margin-top: 30px;
`;


export const SubTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.family.bold};
  font-size: ${(props) => props.theme.fonts.sizes.subTitle};
  color: ${(props) => props.theme.colors.purple2};
  text-align: center;
  line-height: 48px;
`;

export const WrapperInput = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Input = styled.View`
  flex: 1;
`;

export const InputInfo = styled.Text`
  font-family: ${(props) => props.theme.fonts.family.medium};
  font-size: ${(props) => props.theme.fonts.sizes.textLabel};
  color: ${(props) => props.theme.colors.purple2};
  margin-bottom: 10px;
`;
