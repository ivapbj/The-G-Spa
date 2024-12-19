import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const BodySculpting = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggles dropdown visibility
  };

  return (
    (
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
        }}
      ></div>
    ),
    (
      // Right Section: Choose One of My Specialties
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
            marginTop: "30px",
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
              <li
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Link
                  to="/emzero"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  EMZero
                </Link>
              </li>
              <li
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Link
                  to="/emspelvic"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  EMSPelvic
                </Link>
              </li>
              <li
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Link
                  to="/cavitation"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Cavitation
                </Link>
              </li>
              <li
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Link
                  to="/radio-frequency"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Radio Frequency
                </Link>
              </li>
              <li
                style={{
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <Link
                  to="/vacuum-therapy"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Vacuum Therapy
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  );
};

export default BodySculpting;
