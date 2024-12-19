import React from "react";
import BA from "../images/BA.jpeg"; // Adjust path to your image
import MinWhitening from "../images/MinWhitening.JPEG"; // Adjust path to your image

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        marginTop: "100px", // Adjust to ensure navbar doesn't cover the header
      }}
    >
      {/* Centered Header */}
      <h1
        style={{
          fontFamily: "'Courier', monospace",
          fontSize: "2rem",
          marginTop: "20px", // Adjust as needed
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
        }}
      >
        ARE YOU COMING?
      </h1>

      {/* Images side by side */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px", // Space between images
          marginTop: "20px", // Space between header and images
        }}
      >
        <img
          src={BA}
          alt="Before and after body sculpting"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "10px",
            border: "5px solid black", // Thin black border
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
          }}
        />
        <img
          src={MinWhitening}
          alt="Before and after body sculpting"
          style={{
            width: "100%",
            maxWidth: "325px",
            height: "auto",
            borderRadius: "10px",
            border: "5px solid black", // Thin black border
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
