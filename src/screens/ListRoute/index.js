import React from "react";
import { useNavigation } from "@react-navigation/native";
import { rotas } from "~/utils/mocks/list_routes_mocks.json";
import { useApiContext } from "~/contexts/ApiContext";

import { AntDesign } from "@expo/vector-icons";

import * as S from "./styled";

const ListRoute = () => {
  const navigation = useNavigation();
  const { listRoute } = useApiContext();
  listRoute();

  const openScreenMaps = (rota) => {
    navigation.navigate("Maps", { rota: rota });
  };

  return (
    <S.Container>
      <S.Title>Rotas</S.Title>
      <S.WrapperList>
        {rotas.map((rota) => (
          <S.List key={rota.id} onPress={() => openScreenMaps(rota)}>
            <S.NameTitle>{rota.nome}</S.NameTitle>
            <AntDesign name="right" size={16} color="#263238" />
          </S.List>
        ))}
      </S.WrapperList>
    </S.Container>
  );
};

export default ListRoute;
