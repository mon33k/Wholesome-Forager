import React from "react";
import { useNavigate } from "react-router-dom";
// import { ApiContext } from "../../providers/apiContext";
// import PlantPage from "../plantPage/PlantPage";
import "./plantDetail.css";

const PlantDetail = ({ commonName, scientificName, id, image }) => {
  // const plantApi = useContext(ApiContext);
  // const apiCall = plantApi.getPlantById;
  // const apiData = plantApi.plantData;

  const navigate = useNavigate();

  const handleClickCard = (e) => {
    e.preventDefault();
    // console.log("id", id);
    // let singlePlant = await apiCall(id);

    navigate(`/plant/${id}`, { state: { id: `${id}` } });
    //return <PlantPage key={id} plantInfo={singlePlant} />;
    // console.log(singlePlant); // set state for this info to be passed to plant page
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
