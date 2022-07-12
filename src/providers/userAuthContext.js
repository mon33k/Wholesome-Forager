import React, { useContext } from "react";
import { createContext } from "react";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const loginUser = "";

  return (
    <UserAuthContext.Provider
      value={{ plantData: allPlants, getPlantById: singlePlant }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};
