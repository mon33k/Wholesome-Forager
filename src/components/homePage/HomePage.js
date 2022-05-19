import React from "react";
import { Link } from "react-router-dom";
import firstImage from "./Child-Picking-Berries.jpg";
import "./homePage.css";
import iphoneexample from "./iphoneExample.png";

const HomePage = () => {
  return (
    <>
      <div className="first-img-container">
        {" "}
        <div className="img-header-text">
          <p>Edible Plant Manual of</p>
          <p>New York State</p>
        </div>
        <img src={firstImage} className="first-image" />
      </div>
      <div>
        <h3>Information sourced from USDA and PFAF</h3>
        <div className="resources-box">
          <h4>
            For more information please refer to these sources:<br></br>
            <a href="https://plants.sc.egov.usda.gov/home">USDA Database</a>
            <br></br>
            <a href="https://pfaf.org/user/Default.aspx">PFAF Database</a>
          </h4>
        </div>
      </div>
      <div>
        <div className="second-img-container">
          <img
            src="https://loveincorporated.blob.core.windows.net/contentimages/main/foraging+.jpg"
            alt="plants"
          />
        </div>

        <div>
          <img src={iphoneexample} alt="iphoneexample" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
