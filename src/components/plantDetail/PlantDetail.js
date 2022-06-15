import React from "react";
import { useNavigate } from "react-router-dom";
import "./plantDetail.css";

const PlantDetail = ({ commonName, scientificName, id, image }) => {
  const navigate = useNavigate();

  const handleClickCard = (e) => {
    e.preventDefault();

    navigate(`/plant/${id}`, { state: { id: `${id}` } });
  };

  return (
    <div className="plant-detail-container" onClick={handleClickCard}>
      <img src={image} alt="placeholder" className="plant-img" />
      <div className="plant-name-box">
        <h1 className="commonname-text">{commonName}</h1>
        <h4 className="scientificname-text">{scientificName}</h4>
      </div>
    </div>
  );
};

export default PlantDetail;
