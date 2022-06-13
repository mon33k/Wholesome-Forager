import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../providers/apiContext";
import { useLocation } from "react-router-dom";

const PlantPage = () => {
  const [pageInfo, setPageInfo] = useState({});
  let location = useLocation();
  const plantApi = useContext(ApiContext);
  const apiCall = plantApi.getPlantById;
  const apiData = plantApi.plantData;

  // console.log(location);

  // let singlePlant = apiCall(location.state.id);
  // console.log(singlePlant);

  useEffect(() => {
    const singlePlant = async () => {
      const response = await apiCall(location.state.id);
      setPageInfo(response);
    };
    singlePlant();
  }, []);

  console.log(pageInfo);
  return (
    <div>
      <h1>{pageInfo.common_name}</h1>
      <h2>{pageInfo.scientific_name}</h2>
      <p>{pageInfo.known_hazards}</p>
    </div>
  );
};

export default PlantPage;
