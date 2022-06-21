import React, { useContext, useEffect, useState } from "react";
import SearchPlant from "../searchPlant/SearchPlant";
import PlantCard from "../plantCard/PlantCard";
import { ApiContext } from "../../providers/apiContext";
import "./PlantList.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmptyView from "../emptyView/EmptyView";

const PlantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPlantInfo, setAllPlantInfo] = useState([]);
  const plantApi = useContext(ApiContext);
  const plantInfo = plantApi.plantData;

  useEffect(() => {
    const allPlants = async () => {
      const response = await plantInfo();
      setAllPlantInfo(response);
    };
    allPlants();
  }, []);

  const filterPlantsBySearchTerm = (term) => {
    return allPlantInfo.filter((plant) => {
      console.log("plant ", plant);
      return plant.common_name.toLowerCase().includes(term.toLowerCase());
    });
  };

  let filteredPlantsBySearch = searchTerm
    ? filterPlantsBySearchTerm(searchTerm)
    : allPlantInfo;

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
              <PlantCard
                commonName={plant.common_name}
                scientificName={plant.scientific_name}
                image={plant.image_url.split(",")[0]}
                key={plant.id}
                id={plant.id}
              />
            );
          })}
        {filteredPlantsBySearch == 0 && <EmptyView />}
      </div>
    </div>
  );
};

export default PlantList;
