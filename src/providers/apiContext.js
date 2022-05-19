import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    fetch("https://plantapp51022.herokuapp.com/plant/all")
      .then((response) => response.json())
      .then((data) => {
        setPlantData(data);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ plantData: plantData }}>
      {children}
    </ApiContext.Provider>
  );
};
