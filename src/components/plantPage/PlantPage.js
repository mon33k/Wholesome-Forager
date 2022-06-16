import React, { useContext, useEffect, useState } from "react";
import "./PlantPage.css";
import { ApiContext } from "../../providers/apiContext";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PlantPage = () => {
  const [pageInfo, setPageInfo] = useState({});
  let location = useLocation();
  const plantApi = useContext(ApiContext);
  const apiCall = plantApi.getPlantById;

  useEffect(() => {
    const singlePlant = async () => {
      const response = await apiCall(location.state.id);
      setPageInfo(response);
    };
    singlePlant();
  }, []);

  return (
    <div className="plant-page-container">
      {Object.keys(pageInfo).length !== 0 && (
        <>
          <div className="plant-name-card">
            <FontAwesomeIcon icon={faStar} />
            <img
              src={pageInfo && pageInfo.image_url.split(", ")[0]}
              className="plant-profile-img"
              alt={`plant-${pageInfo.common_name}`}
            />
            <div className="plant-name-container">
              <h1>{pageInfo?.common_name}</h1>
              <h2>{pageInfo?.scientific_name}</h2>
            </div>
          </div>
          <div className="fact-container">
            <div>
              <h4>Habitats:</h4>
              <p>{pageInfo.habitat}</p>
            </div>
            <div>
              <h4>Known Hazards:</h4>
              <p>{pageInfo?.known_hazards}</p>
            </div>
            <div>
              <h4>Edibility Rating:</h4>
              <p>{pageInfo.edible_rating}</p>
            </div>
            <div>
              <h4>Medicinal Rating:</h4>
              <p>{pageInfo.medicinal_rating}</p>
            </div>
          </div>
          <div className="edible-use-box">
            <h4>Edible Use</h4>
            <p>{pageInfo.edible_use}</p>
          </div>
          <div className="medicinal-use-box">
            <h4>Medicinal Use</h4>
            <p>{pageInfo.medicinal_use}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PlantPage;
