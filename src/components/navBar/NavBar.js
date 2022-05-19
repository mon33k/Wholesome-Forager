import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./navBar.css";
import PlantList from "../plantList/PlantList";
// import PlantPage from "../plantPage/PlantPage";
import HomePage from "../homePage/HomePage";
import PlantPage from "../plantPage/PlantPage";
import FavoritePlants from "../favoritePlants/FavoritePlants";
import SearchPlant from "../searchPlant/SearchPlant";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/">Wholesome Forager</Link>
        <div className="burger-menu">
          <Link to="/plant/list">Plant Archive</Link>
          <Link to="/favorite">Favorite Plants</Link>
          <Link to="/search">Search</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant/list" element={<PlantList />} />
        <Route path="/plant/:id" element={<PlantPage />} />
        <Route path="/favorite" element={<FavoritePlants />} />
        <Route path="/search" element={<SearchPlant />} />
      </Routes>
    </>
  );
};

export default NavBar;
