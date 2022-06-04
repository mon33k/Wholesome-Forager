import React, { setState, useState } from "react";
import "./SearchPlant.css";

const SearchPlant = () => {
  const [searchPlant, setSearchPlant] = useState();

  const handleChange = (e) => {
    //console.log(e.target.value);
    setSearchPlant(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(searchPlant);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a plant!"
        onChange={handleChange}
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
};

export default SearchPlant;
