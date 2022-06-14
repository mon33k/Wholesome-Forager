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
      return plant.common_name.toLowerCase().includes(term.toLowerCase());
    });
  };

  let filteredPlantsBySearch = searchTerm
    ? filterPlantsBySearchTerm(searchTerm)
    : plantInfo;

  return (
    <div className="plantList">
      {/* <SearchPlant /> */}
      {/* <input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      /> */}
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="searchBar"
      />

      {filteredPlantsBySearch.length > 0 &&
        filteredPlantsBySearch.map((plant) => {
          return (
            <PlantDetail
              commonName={plant.common_name}
              scientificName={plant.scientific_name}
              key={plant.id}
              id={plant.id}
            />
          );
        })}
      {filteredPlantsBySearch == 0 && <div>No results.</div>}
    </div>
  );
};

export default PlantList;
