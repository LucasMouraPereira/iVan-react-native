import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const WrapperTitle = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 15px;
  margin-left: 30px;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.family.bold};
  font-size: ${(props) => props.theme.fonts.sizes.title};
  color: ${(props) => props.theme.colors.black};
`;

export const WrapperImage = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageHome = styled.Image`
  width: 100%;
  height: 350px;
  max-width: 350px;
`;

export const WrapperSubTitle = styled.View`
  margin-left: 30px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  width: 100%;
  max-width: 247px;
  font-family: ${(props) => props.theme.fonts.family.medium};
  font-size: ${(props) => props.theme.fonts.sizes.textInfo};
  line-height: 30px;
  color: ${(props) => props.theme.colors.purple1};
`;
