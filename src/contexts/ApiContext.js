import React, { useState, useContext, createContext } from "react";

export const ApiContext = createContext({});

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [routeName, setRouteName] = useState();
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  console.log(routeName, origin, destination)
  return (
    <ApiContext.Provider
      value={{
        routeName,
        setRouteName,
        origin,
        setOrigin,
        destination,
        setDestination,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
