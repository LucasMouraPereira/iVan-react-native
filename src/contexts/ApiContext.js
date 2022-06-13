import React, { useState, useContext, createContext } from "react";
import { Alert } from "react-native";
import axios from "axios";

export const ApiContext = createContext({});

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [routeName, setRouteName] = useState();
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  const [listResponse, setListResponse] = useState();

  const getRouter = async () => {
    const { status } = await axios({
      method: "post",
      url: "https://us-central1-ivan-6ee57.cloudfunctions.net/gerarRota",
      data: {
        nome: routeName,
        origem: origin,
        destino: destination,
      },
    });

    if(status === 201 || status === 200) {
      Alert.alert("Rota cadastrada!")
    } else {
      Alert.alert("Erro ao cadastrar a rota!")
    }
  };

  const listRoute = async () => {
    const resp = await axios({
      method: "get",
      url: "https://us-central1-ivan-6ee57.cloudfunctions.net/listarRotas",
    });

    setListResponse(resp.data);
  };

  return (
    <ApiContext.Provider
      value={{
        routeName,
        setRouteName,
        origin,
        setOrigin,
        destination,
        setDestination,
        getRouter,
        listRoute,
        listResponse
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
