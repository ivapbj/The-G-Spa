import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import Collage1 from "../images/Collage1.jpeg";
import Collage2 from "../images/Collage2.jpeg";
import Collage3 from "../images/Collage3.jpeg";
import Collage4 from "../images/Collage4.jpeg";
import Collage5 from "../images/Collage5.jpeg";
import BA30 from "../images/BA30.jpeg";
import MinWhitening from "../images/MinWhitening.JPEG";
import "../pages/Home.css"; // Make sure the CSS is correctly imported

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle image clicks for body sculpting
  const handleImageClick = () => {
    navigate("/services/body-sculpting"); // Navigate to the body-sculpting page
  };

  // Function to handle click on MinWhitening image
  const handleMinWhiteningClick = () => {
    navigate("/services/smile-perfected"); // Navigate to the smile-perfected page
  };

  return (
    <div className="home-container">
      {/* Main Image Container */}
      <div className="image-container">
        {/* First row of images */}
        <div className="row">
          <img
            className="BA30"
            src={BA30}
            alt="Before and after torso"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
          <img
            className="collage2"
            src={Collage2}
            alt="Before and after abs"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
          <img
            className="collage5"
            src={Collage5}
            alt="Before and after teeth"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
        </div>

        {/* Second row of images  */}
        <div className="row">
          <img
            className="collage4"
            src={Collage4}
            alt="Before and after side"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
          <img
            className="collage1"
            src={Collage1}
            alt="Before and after butt"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
          <img
            className="collage3"
            src={Collage3}
            alt="Before and after belly"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
        </div>

        {/* MinWhitening in its own row (with click functionality for navigation) */}
        <div className="row min-whitening-row">
          <img
            className="min-whitening"
            src={MinWhitening}
            alt="Before and after teeth whitening"
            onClick={handleMinWhiteningClick} // Add onClick handler for MinWhitening
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
