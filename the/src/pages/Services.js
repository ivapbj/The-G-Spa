import React from "react";
import { Link } from "react-router-dom"; // Import Link to navigate between pages

const Services = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Background image */}
      <img
        src={require("../images/logo.JPG")}
        alt="The G Spa Logo"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the image scales properly
          zIndex: -1, // Keeps it behind content
        }}
      />

      {/* Service buttons in the center */}
      <div
        style={{
          position: "absolute",
          top: "57%",
          left: "50%",
          transform: "translate(-50%, -45%)", // Centers the div
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/services/body-sculpting" style={styles.link}>
          <button style={styles.button}>Body Sculpting</button>
        </Link>

        <Link to="/services/smile-perfected" style={styles.link}>
          <button style={styles.button}>Smile Perfected</button>
        </Link>

        <Link to="/services/add-on-services" style={styles.link}>
          <button style={styles.button}>Add-on Services</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  link: {
    textDecoration: "none",
  },
  button: {
    backgroundColor: "#000",
    marginTop: "10px",
    color: "white",
    padding: "10px 10px",
    fontSize: "18px",
    // border: "3px solid white", // Adding a border around the button
    // borderRadius: "10px", // Rounded corners for the button
    cursor: "pointer",
    width: "180px",
    transition: "all 0.3s ease",
  },
};

export default Services;
