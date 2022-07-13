import React from "react";
import { createContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../firebase-config";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const authentication = getAuth();

  const handleRegisterUser = (email, password) => {
    createUserWithEmailAndPassword(authentication, email, password).then(
      (res) => {
        sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
      }
    );
  };

  const handleLoginUser = (email, password) => {
    signInWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      }
    );
  };

  return (
    <UserAuthContext.Provider
      value={{
        handleRegisterUser: handleRegisterUser,
        handleLoginUser: handleLoginUser,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};
