import React, { useContext, useState } from "react";
import SearchPlant from "../searchPlant/SearchPlant";
import PlantDetail from "../plantDetail/PlantDetail";
import { ApiContext } from "../../providers/apiContext";
import "./PlantList.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const PlantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const plantApi = useContext(ApiContext);
  const plantInfo = plantApi.plantData;

  const filterPlantsBySearchTerm = (term) => {
    return plantInfo.filter((plant) => {
      console.log("plant ", plant);
      return plant.common_name.toLowerCase().includes(term.toLowerCase());
    });
  };

  let filteredPlantsBySearch = searchTerm
    ? filterPlantsBySearchTerm(searchTerm)
    : plantInfo;

  return (
    <div className="plantList">
      <div className="column1">
        <h1>Plant Archive</h1>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchTerm}
          className="search-input"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div className="column2">
        {filteredPlantsBySearch.length > 0 &&
          filteredPlantsBySearch.map((plant) => {
            return (
              <PlantDetail
                commonName={plant.common_name}
                scientificName={plant.scientific_name}
                image={plant.image_url.split(",")[0]}
                key={plant.id}
                id={plant.id}
              />
            );
          })}
        {filteredPlantsBySearch == 0 && <div>No results.</div>}
      </div>
    </div>
  );
};

export default PlantList;
