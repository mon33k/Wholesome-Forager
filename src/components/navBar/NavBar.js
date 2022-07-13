import React, { useEffect, useContext, useState, useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import "./navBar.css";
import PlantList from "../plantList/PlantList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPersonHiking } from "@fortawesome/free-solid-svg-icons";

import HomePage from "../homePage/HomePage";
import PlantPage from "../plantPage/PlantPage";
import FavoritePlants from "../favoritePlants/FavoritePlants";
import SearchPlant from "../searchPlant/SearchPlant";

import AuthForm from "../authForm/AuthForm";
import { UserAuthContext } from "../../providers/userAuthContext";
import { FavoritesContext } from "../../providers/favoritesContext";

const NavBar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userAuthMethods = useContext(UserAuthContext);
  const node = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
  }, []);

  const handleClickModal = (e) => {
    if (node.current.contains(e.target)) {
      setModalOpen(true);
      return;
    }
    setModalOpen(false);
  };

  const handleAuthAction = (type) => {
    try {
      if (type === "register") {
        userAuthMethods.handleRegisterUser(email, password);
        navigate("/");
      } else if (type === "login") {
        userAuthMethods.handleLoginUser(email, password);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickModal);

    return () => {
      document.removeEventListener("mousedown", handleClickModal);
    };
  }, []);

  return (
    <>
      <div className="nav-container">
        <Link to="/" className="logo-icon">
          Wholesome Forager
          <FontAwesomeIcon icon={faPersonHiking} className="hiking-icon" />
        </Link>
        <div className="desktop-menu">
          <Link to="/plant/list">Plant Archive</Link>
          <Link to="/favorite">Favorite Plants</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </div>
        <div className="burger-menu" ref={node}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleClickModal}
            className="fa-icon"
          />
          {isModalOpen && (
            <div className="menu-overlay">
              <Link to="/plant/list">Plant Archive</Link>
              <Link to="/favorite">Favorite Plants</Link>
            </div>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant/list" element={<PlantList />} />
        <Route path="/plant/:id" element={<PlantPage />} />
        <Route path="/favorite" element={<FavoritePlants />} />
        <Route path="/search/:text" element={<SearchPlant />} />
        <Route
          path="/login"
          element={
            <AuthForm
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAuthAction("login")}
            />
          }
        />
        <Route
          path="/register"
          element={
            <AuthForm
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAuthAction("register")}
            />
          }
        />
      </Routes>
    </>
  );
};

export default NavBar;
