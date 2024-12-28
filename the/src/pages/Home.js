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
      {/* Header with Animated Text */}
      {/* <h1 className="header-text">Are You Coming?</h1> */}

      {/* Main Image Container */}
      <div className="image-container">
        {/* First row of images */}
        <div className="row">
          <img
            src={Collage1}
            alt="Before and after torso"
            className="image"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
          <img
            src={Collage2}
            alt="Before and after abs"
            className="image"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
          <img
            src={BA30}
            alt="Before and after teeth"
            className="image"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
        </div>

        {/* Second row of images (move Collage3 to the right of Collage5) */}
        <div className="row">
          <img
            src={Collage4}
            alt="Before and after side"
            className="image"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
          <img
            src={Collage5}
            alt="Before and after butt"
            className="image"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
          <img
            src={Collage3}
            alt="Before and after belly"
            className="image"
            onClick={handleImageClick} // Add onClick handler to navigate
          />
        </div>

        {/* MinWhitening in its own row (with click functionality for navigation) */}
        <div className="row min-whitening-row">
          <img
            src={MinWhitening}
            alt="Before and after teeth whitening"
            className="image min-whitening"
            onClick={handleMinWhiteningClick} // Add onClick handler for MinWhitening
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
