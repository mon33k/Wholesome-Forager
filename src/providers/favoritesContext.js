import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [plantData, setPlantData] = useState([]);

  //   const favoritePlants =

  const setFavoritePlants = (plant) => {
    // setPlantData(plant);
    //localStorage.setItem("plantsFavorited", plantData);
  };
  console.log(plantData);

  return (
    <FavoritesContext.Provider
      value={{ favorites: plantData, setFavorites: setFavoritePlants }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
