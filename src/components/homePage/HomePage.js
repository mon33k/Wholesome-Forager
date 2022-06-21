import React from "react";
import { Link } from "react-router-dom";
// import firstImage from "/Child-Picking-Berries.jpg";
import "./homePage.css";
// import iphoneexample from "/iphoneExample.png";

const HomePage = () => {
  return (
    <>
      <div className="first-section-container">
        {" "}
        <div className="img-header-text">
          <p>Edible Plant Manual of</p>
          <p>New York City</p>
        </div>
        <img src="/Child-Picking-Berries.jpg" className="first-image" />
        <div className="disclaimer-nested-container">
          <h3>
            Information sourced from{" "}
            <a href="https://plants.sc.egov.usda.gov/home">USDA</a> and{" "}
            <a href="https://pfaf.org/user/Default.aspx">PFAF</a>
          </h3>
          <div className="disclaimer-box">
            <h4>
              Disclaimer: All information here is for education and general
              information purposes.
              <br></br>
              Always seek the advice of a health professional before touching or
              eating any plant matter.
              <br></br>
              As with any natural ingredients found in the wild, they can be
              toxic if misused.
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
            src="/iphoneExample.png"
            alt="iphoneexample"
            className="third-image"
          />
        </div>

        <div className="third-section-container">
          <p className="second-feature-description1">
            Find one of the plants you saw on here?
          </p>
          <div className="third-section-box">
            <div className="veggie-img-container">
              <img
                src="https://farmhouse-bc.com/wp-content/uploads/elderberry-flowers-for-bowels.jpg"
                alt="plants"
                className="veggie-image"
              />
            </div>
            <p className="second-feature-description">
              Add your notes for <br></br> other foragers to learn <br></br>more
              about what to <br></br>look out for!{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
