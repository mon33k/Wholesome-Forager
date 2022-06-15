import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./navBar.css";
import PlantList from "../plantList/PlantList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPersonHiking } from "@fortawesome/free-solid-svg-icons";

import HomePage from "../homePage/HomePage";
import PlantPage from "../plantPage/PlantPage";
import FavoritePlants from "../favoritePlants/FavoritePlants";
import SearchPlant from "../searchPlant/SearchPlant";

const NavBar = () => {
  const node = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClickModal = (e) => {
    if (node.current.contains(e.target)) {
      setModalOpen(true);
      return;
    }
    setModalOpen(false);
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
      </Routes>
    </>
  );
};

export default NavBar;
