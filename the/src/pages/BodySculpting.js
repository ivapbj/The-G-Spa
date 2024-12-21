import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import BA from "../images/BA.jpeg"; // Adjust path to your image

const BodySculpting = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggles dropdown visibility
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the selected page
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        marginTop: "00px", // Ensures content starts below the navbar
      }}
    >
      {/* Left Section: Body Sculpting */}
      <div
        style={{
          flex: "1",
          padding: "150px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Courier', monospace",
            fontSize: "3rem",
            margin: "20px 0",
            marginLeft: "-120px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          }}
        >
          Body Sculpting
        </h1>
        <p
          style={{
            fontFamily: "'Courier', monospace",
            fontSize: "1.2rem",
            marginTop: "30px", // Space between text and image
            marginLeft: "-100px",
            maxWidth: "800px",
            lineHeight: "1.8",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          }}
        >
          Body sculpting is a non-invasive treatment designed to reshape the
          body by targeting stubborn fat deposits and improving skin tone.
          Through advanced techniques like EMS, radiofrequency, cavitation, and
          vacuum therapy, body sculpting helps reduce fat, smooth cellulite, and
          tighten skin. These procedures are ideal for those looking to enhance
          their natural curves without the need for surgery or downtime.
        </p>
        <img
          src={BA}
          alt="Before and after body sculpting"
          style={{
            width: "50%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
            marginLeft: "-100px",
            marginTop: "20px",
          }}
        />
      </div>

      {/* Right Section: Choose One of My Specialties */}
      <div
        style={{
          flex: "1",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Courier', monospace",
            fontSize: "2rem",
            marginTop: "-200px",
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
            borderRadius: "20px", // Rounded edges
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
              {[
                { name: "EMSZero", path: "/emszero" },
                { name: "EMSPelvic", path: "/emspelvic" },
                { name: "Cavitation", path: "/cavitation" },
                { name: "Radio Frequency", path: "/radio-frequency" },
                { name: "Vacuum Therapy", path: "/vacuum-therapy" },
              ].map((item) => (
                <li
                  key={item.name}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #ddd",
                  }}
                  onClick={() => handleNavigation(item.path)} // Navigate to specific page
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodySculpting;
