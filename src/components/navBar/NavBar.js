import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./navBar.css";
import PlantList from "../plantList/PlantList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPersonHiking } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

// import PlantPage from "../plantPage/PlantPage";
import HomePage from "../homePage/HomePage";
import PlantPage from "../plantPage/PlantPage";
import FavoritePlants from "../favoritePlants/FavoritePlants";
import SearchPlant from "../searchPlant/SearchPlant";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleMenuClick = (e) => {
    clicked ? setClicked(false) : setClicked(true);
  };

  return (
    <>
      <div className="nav-container">
        <Link to="/" className="logo-icon">
          Wholesome Forager
          <FontAwesomeIcon icon={faPersonHiking} className="hiking-icon" />
        </Link>
        <div className="burger-menu">
          <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} />
          {clicked ? (
            <div className="menu-overlay">
              <Link to="/plant/list">Plant Archive</Link>
              <Link to="/favorite">Favorite Plants</Link>
              <SearchPlant />
            </div>
          ) : (
            ""
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
