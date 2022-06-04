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

  const singlePlant = (id) => {
    return fetch(`https://plantapp51022.herokuapp.com/plant/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  };

  return (
    <ApiContext.Provider
      value={{ plantData: plantData, getPlantById: singlePlant }}
    >
      {children}
    </ApiContext.Provider>
  );
};
