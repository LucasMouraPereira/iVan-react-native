import React from "react";

import { Button } from "react-native";

import * as S from "./styled";

const Home = ({ navigation }) => {
  const openScreen = () => {
    navigation.navigate('RegisterRoute');
  };
  return (
    <S.Container>
      <S.Title>Iniciando projeto!</S.Title>
      <Button title="Ir para outra tela" onPress={openScreen} />
    </S.Container>
  );
};

export default Home;
