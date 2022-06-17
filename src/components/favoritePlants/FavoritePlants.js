import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useContext, useState, useRef } from "react";
import { FavoritesContext } from "../../providers/favoritesContext";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import "./FavoritePlants.css";

const FavoritePlants = () => {
  const [currentStorage, setCurrentStorage] = useState({});
  const [deletedItem, setDeletedItem] = useState("");
  //setCurrentStorage(Object.values({ ...localStorage }));
  // const data = localStorage.getItem("Beach Strawberry");
  // console.log("data", JSON.parse(data));
  //useEffect(() => {
  //const data = localStorage.getItem(deletedItem);
  // if (data) {
  //   setCurrentStorage(storage);
  // }
  // console.log(localStorage);
  //});

  // console.log("all favs");
  const handleDeleteAllFavorites = () => {
    localStorage.clear();
  };

  const handleDeleteOne = (id, e) => {
    console.log("id deleted ", typeof id.toString());
    setDeletedItem(id);
    //let itemToRemove = localStorage.getItem(id.toString());
    localStorage.removeItem(id);
    // localStorage.set
    // setCurrentStorage();
  };
  // console.log(localStorage);
  return (
    <div>
      Favorite Plant page
      {Object.values({ ...localStorage }).map((plant) => {
        let jsonData = JSON.parse(plant);
        return (
          <div className="favorite-plant-card">
            <h1>{jsonData.common_name}</h1>
            <p>{jsonData.scientific_name}</p>
            <button
              className="delete-btn"
              onClick={() => handleDeleteOne(jsonData.id)}
            >
              <FontAwesomeIcon icon={faCircleMinus} className="delete-icon" />
            </button>
          </div>
        );
      })}
      <button onClick={() => handleDeleteAllFavorites}>Delete All</button>
    </div>
  );
};

export default FavoritePlants;
