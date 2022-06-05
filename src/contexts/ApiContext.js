import React, { useState, useContext, createContext } from "react";

import axios from "axios";

export const ApiContext = createContext({});

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [routeName, setRouteName] = useState();
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);

  const getRouter = () => {
    console.log({ nomeRota: routeName, origem: origin, destino: destination });
    const { status } = axios({
      method: "post",
      url: "https://us-central1-ivan-6ee57.cloudfunctions.net/gereRota",
      data: {
        nomeRota: routeName,
        origem: origin,
        destino: destination,
      },
    });
    console.log(status);
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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
