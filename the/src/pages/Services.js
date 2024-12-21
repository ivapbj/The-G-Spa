import React, { useState } from "react";
import BA from "../images/BA.jpeg"; // Make sure this path to your image is correct
import { Link } from "react-router-dom";

const Services = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        paddingTop: "100px", // Add padding to prevent content from being covered by navbar
        textAlign: "center",
        fontFamily: "'Courier', monospace",
      }}
    >
      {/* Container for content */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Enable wrapping for responsive layout
          justifyContent: "space-around",
          alignItems: "flex-start",
          padding: "20px",
          gap: "20px", // Add space between sections
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: "1 1 45%", // Adjust width for responsiveness
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              margin: "60px 0",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
            }}
          >
            Body Sculpting
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginTop: "20px",
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
            }}
          >
            Body sculpting is a non-invasive treatment designed to reshape the
            body by targeting stubborn fat deposits and improving skin tone.
            Through advanced techniques like EMS, radiofrequency, cavitation,
            and vacuum therapy, body sculpting helps reduce fat, smooth
            cellulite, and tighten skin. These procedures are ideal for those
            looking to enhance their natural curves without the need for surgery
            or downtime.
          </p>
          <img
            src={BA}
            alt="Before and after body sculpting"
            style={{
              width: "90%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
              marginTop: "20px",
            }}
          />
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: "1 1 45%", // Adjust width for responsiveness
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginTop: "60px",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
            }}
          >
            CHOOSE ONE OF MY SPECIALTIES
          </h2>
          <button
            onClick={handleDropdown}
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 20px",
              fontSize: "18px",
              border: "2px solid black",
              borderRadius: "20px",
              cursor: "pointer",
              marginTop: "20px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Select Specialties
          </button>
          {showDropdown && (
            <div
              style={{
                marginTop: "10px",
                backgroundColor: "white",
                color: "black",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                width: "250px",
                textAlign: "left",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <Link
                    to="/emszero"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    EMZero
                  </Link>
                </li>
                <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <Link
                    to="/emspelvic"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    EMSPelvic
                  </Link>
                </li>
                <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <Link
                    to="/cavitation"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Cavitation
                  </Link>
                </li>
                <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <Link
                    to="/radio-frequency"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Radio Frequency
                  </Link>
                </li>
                <li style={{ padding: "10px" }}>
                  <Link
                    to="/vacuum-therapy"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Vacuum Therapy
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
