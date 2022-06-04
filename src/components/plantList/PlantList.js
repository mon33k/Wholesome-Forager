import React, { useContext } from "react";
import PlantDetail from "../plantDetail/PlantDetail";
import { ApiContext } from "../../providers/apiContext";
import "./PlantList.css";

const PlantList = () => {
  const plantApi = useContext(ApiContext);
  const plantInfo = plantApi.plantData;

  return (
    <div className="plantList">
      {plantInfo.map((plant) => {
        return (
          <PlantDetail
            commonName={plant.common_name}
            scientificName={plant.scientific_name}
            key={plant.id}
            id={plant.id}
          />
        );
      })}
    </div>
  );
};

export default PlantList;
