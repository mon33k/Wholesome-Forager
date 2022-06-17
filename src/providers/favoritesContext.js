import React, { useContext, useEffect } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const setFavoritePlants = (id, plant) => {
    localStorage.setItem(id, JSON.stringify(plant));
  };

  return (
    <FavoritesContext.Provider value={{ setFavorites: setFavoritePlants }}>
      {children}
    </FavoritesContext.Provider>
  );
};
