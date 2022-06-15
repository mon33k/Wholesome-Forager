import React, { useContext, useEffect, useState } from "react";
import "./PlantPage.css";
import { ApiContext } from "../../providers/apiContext";
import { useLocation } from "react-router-dom";

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

          <p>{pageInfo?.known_hazards}</p>
        </>
      )}
    </div>
  );
};

export default PlantPage;
