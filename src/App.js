import "./App.css";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./components/homePage/HomePage";
import { ApiProvider, ApiContext } from "./providers/apiContext";
import {
  FavoritesProvider,
  FavoritesContext,
} from "./providers/favoritesContext";
import { UserAuthProvider } from "./providers/userAuthContext";

import { Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <ApiProvider>
      <UserAuthProvider>
        <FavoritesProvider>
          <div className="App">
            <NavBar />
          </div>
        </FavoritesProvider>
      </UserAuthProvider>
    </ApiProvider>
  );
}

export default App;
