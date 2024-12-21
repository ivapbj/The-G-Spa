import React from "react";
import BA from "../images/BA.jpeg"; // Adjust path to your image
import MinWhitening from "../images/MinWhitening.JPEG"; // Adjust path to your image
import "../pages/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Centered Header */}
      <h1 className="header-text">ARE YOU COMING?</h1>

      {/* Images side by side */}
      <div className="image-container">
        <img src={BA} alt="Before and after body sculpting" className="image" />
        <img
          src={MinWhitening}
          alt="Before and after teeth whitening"
          className="image"
        />
      </div>
    </div>
  );
};

export default Home;
