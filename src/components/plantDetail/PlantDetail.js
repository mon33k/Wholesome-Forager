import React from "react";
import "./plantDetail.css";

const PlantDetail = ({ commonName, scientificName, id }) => {
  return (
    <div className="plant-detail-container">
      <img
        src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
        alt="placeholder"
        className="placeholder-img"
      />
      <div className="plant-name-box">
        <h1 className="commonname-text">{commonName}</h1>
        <h4 className="scientificname-text">{scientificName}</h4>
      </div>
    </div>
  );
};

export default PlantDetail;
