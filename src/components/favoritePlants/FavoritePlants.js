import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useContext, useState, useRef } from "react";
import PlantCard from "../plantCard/PlantCard";
import EmptyView from "../emptyView/EmptyView";
import { FavoritesContext } from "../../providers/favoritesContext";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import "./FavoritePlants.css";

const FavoritePlants = () => {
  const [favoritePlantStorage, setFavoritePlantStorage] = useState(
    Object.values({ ...localStorage })
  );
  const [currentStorage, setCurrentStorage] = useState({});

  const handleDeleteAllFavorites = () => {
    console.log("delete all clicked");
    localStorage.clear();
    setFavoritePlantStorage([]);
  };

  const handleDeleteOne = (id, e) => {
    localStorage.removeItem(id);
    setFavoritePlantStorage(Object.values({ ...localStorage }));
  };

  return (
    <div className="favorite-container">
      {favoritePlantStorage.length === 0 && (
        <EmptyView message="No favorites selected" />
      )}
      {favoritePlantStorage.length > 0 && (
        <div>
          {favoritePlantStorage.map((plant) => {
            let jsonData = JSON.parse(plant);
            return (
              <div className="plantCard-container">
                <PlantCard
                  commonName={jsonData.common_name}
                  scientificName={jsonData.scientific_name}
                  image={jsonData.image_url.split(",")[0]}
                  key={jsonData.id}
                  id={jsonData.id}
                />
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteOne(jsonData.id)}
                >
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    className="delete-icon"
                  />
                </button>
              </div>
            );
          })}

          <button onClick={() => handleDeleteAllFavorites()}>Delete All</button>
        </div>
      )}
    </div>
  );
};

export default FavoritePlants;
