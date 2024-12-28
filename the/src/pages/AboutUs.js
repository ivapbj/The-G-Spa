import React from "react";
import aboutImage from "../images/Giana.jpeg"; // Adjust path to your image
import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-header">About Us</h1>
      <img src={aboutImage} alt="Giana Headshot" className="about-us-image" />
      <p className="about-us-content">
        Giana Aragon is originally from Springfield, Massachusetts. She is a
        hardworking and motivated mom of two boys. She first studied Psychology
        at Palm Beach State College and then ended up with a degree in Science
        becoming a licensed Dental Hygienist. She is licensed in both
        Massachusetts and Connecticut in dental hygiene and administering local
        anesthesia. She is also a top producing licensed Realtor in both
        Massachusetts and Connecticut. She loves being part of the home buying
        and selling process. Giana has taught group fitness and nutrition and
        also worked in the beauty industry. She has now combined all of her
        passions and started the G Spa for body sculpting and teeth whitening.
      </p>
    </div>
  );
};

export default AboutUs;
