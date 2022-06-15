import React, { useContext } from "react";
import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const allPlants = () => {
    return fetch("https://plantapp51022.herokuapp.com/plant/all")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  const singlePlant = (id) => {
    return fetch(`https://plantapp51022.herokuapp.com/plant/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  return (
    <ApiContext.Provider
      value={{ plantData: allPlants, getPlantById: singlePlant }}
    >
      {children}
    </ApiContext.Provider>
  );
};
