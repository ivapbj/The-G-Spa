import React from "react";
import Collage1 from "../images/Collage1.jpeg";
import Collage2 from "../images/Collage2.jpeg";
import Collage3 from "../images/Collage3.jpeg";
import Collage4 from "../images/Collage4.jpeg";
import Collage5 from "../images/Collage5.jpeg";
import MinWhitening from "../images/MinWhitening.JPEG";
import "../pages/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="header-text">ARE YOU COMING?</h1>
      <div className="image-container">
        <img src={Collage1} alt="Before and after torso" className="image" />
        <img src={Collage2} alt="Before and after abs" className="image" />
        <img src={Collage3} alt="Before and after belly" className="image" />
        <img src={Collage4} alt="Before and after side" className="image" />
        <img src={Collage5} alt="Before and after butt" className="image" />
        <img
          src={MinWhitening}
          alt="Before and after teeth"
          className="image min-whitening"
        />
      </div>
    </div>
  );
};

export default Home;
