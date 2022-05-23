import React from "react";
import { Link } from "react-router-dom";
import firstImage from "./Child-Picking-Berries.jpg";
import "./homePage.css";
import iphoneexample from "./iphoneExample.png";

const HomePage = () => {
  return (
    <>
      <div className="first-section-container">
        {" "}
        <div className="img-header-text">
          <p>Edible Plant Manual of</p>
          <p>New York State</p>
        </div>
        <img src={firstImage} className="first-image" />
        <div className="disclaimer-nested-container">
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
      </div>
      <div>
        <div className="second-section-container">
          <p className="feature1">
            Looking for a specific plant? <br></br>Search for it or see a full{" "}
            <br></br>
            list of plant species!
          </p>
          <img
            src={iphoneexample}
            alt="iphoneexample"
            className="third-image"
          />
        </div>

        <div className="third-section-container">
          <img
            src="https://loveincorporated.blob.core.windows.net/contentimages/main/foraging+.jpg"
            alt="plants"
            className="veggie-image"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
