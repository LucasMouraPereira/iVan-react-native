import React from "react";
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { ScrollView } from "react-native-virtualized-view";

import { inputsData } from "~/utils/mocks/google_mocks.json";

import { useApiContext } from "~/contexts/ApiContext";

import CustomTextInput from "~/core/CustomTextInput";
import GooglePlacesInput from "~/core/GooglePlacesInput";
import CustomButton from "~/core/CustomButton";

import * as S from "./styled";

const RegisterRoute = () => {
  const { routeName, setRouteName, setOrigin, setDestination } =
    useApiContext();

  const customButton = {
    marginBottom: "20px",
  };

  const openScreenRegister = () => {
    navigation.navigate("RegisterRoute");
  };

  return (
    <S.Container
      resetScrollToCoords={{ x: 0, y: 0 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          horizontal={false}
          nestedScrollEnabled={true}
          contentContainerStyle={{ flexGrow: 0.7, justifyContent: "center" }}
        >
          <S.Title>Qual é o seu caminho?</S.Title>
          <S.SubTitle>Vamos cadastrar a rota:</S.SubTitle>
          <S.WrapperInput>
            <S.Input>
              <S.InputInfo>Digite o nome para sua rota</S.InputInfo>
              <CustomTextInput
                value={routeName}
                placeholder="Nome da rota"
                onChangeText={setRouteName}
              />
            </S.Input>

            {inputsData.map(({ text, placeholder }, index) => (
              <S.Input key={index}>
                <S.InputInfo>{text}</S.InputInfo>
                <GooglePlacesInput placeholder={placeholder} />
              </S.Input>
            ))}

            <CustomButton
              styled={customButton}
              title="Cadastrar rotas"
              onPress={openScreenRegister}
            />
          </S.WrapperInput>
        </ScrollView>
      </TouchableWithoutFeedback>
    </S.Container>
  );
};

export default RegisterRoute;
