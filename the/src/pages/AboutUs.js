import React from "react";
import aboutImage from "../images/Giana.jpeg"; // Adjust path to your image

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundColor: "black", // Background color for the page
        color: "white",
        minHeight: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontFamily: "'New Times Roman', monospace", // Optional: font style
          fontSize: "50px",
          marginTop: "0px", // Space between top of page and text
          marginBottom: "40px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
        }}
      >
        About Us
      </h1>

      {/* About Image */}
      <img
        src={aboutImage}
        alt="Giana Headshot"
        style={{
          width: "60%", // Adjust size as needed
          maxWidth: "600px", // Prevents image from getting too large
          height: "auto",
          borderRadius: "10px", // Optional: adds rounded corners
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)", // Optional: adds shadow to image
          marginBottom: "20px", // Space between image and text
        }}
      />

      {/* Content Section */}
      <p
        style={{
          fontFamily: "'New Times Roman', monospace",
          fontSize: "18px",
          marginTop: "30px", // Space between text and image
          maxWidth: "800px", // Controls the width of the paragraph
          color: "#ddd",
        }}
      >
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
