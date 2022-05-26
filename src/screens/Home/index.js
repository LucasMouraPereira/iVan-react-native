import React from "react";


import CustomButton from "~/core/CustomButton";

import * as S from "./styled";

const Home = ({ navigation }) => {
  const customButton = {
    marginBottom: "20px",
  };
  const openScreen = () => {
    navigation.navigate("RegisterRoute");
  };
  return (
    <S.Container>
      <S.WrapperTitle>
        <S.Title>iVan</S.Title>
      </S.WrapperTitle>
      <S.WrapperImage>
        <S.ImageHome source={require("~/utils/images/presetation_home.png")} />
      </S.WrapperImage>

      <S.WrapperSubTitle>
        <S.SubTitle>
          Facilite seu dia e deixe-nos encontrar as melhores rotas para você.
        </S.SubTitle>
      </S.WrapperSubTitle>

      <CustomButton
        styled={customButton}
        title="Acessar minhas rotas"
        onPress={openScreen}
      />
      <CustomButton
        styled={customButton}
        title="Cadastrar minhas rotas"
        onPress={openScreen}
      />
    </S.Container>
  );
};

export default Home;
