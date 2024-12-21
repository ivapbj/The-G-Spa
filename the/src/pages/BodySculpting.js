import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import BA from "../images/BA.jpeg"; // Adjust path to your image
import "./BodySculpting.css"; // Import the CSS file

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
    <div className="body-sculpting-container">
      {/* Left Section: Body Sculpting */}
      <div className="left-section">
        <h1>Body Sculpting</h1>
        <p>
          Body sculpting is a non-invasive treatment designed to reshape the
          body by targeting stubborn fat deposits and improving skin tone.
          Through advanced techniques like EMS, radiofrequency, cavitation, and
          vacuum therapy, body sculpting helps reduce fat, smooth cellulite, and
          tighten skin. These procedures are ideal for those looking to enhance
          their natural curves without the need for surgery or downtime.
        </p>
        <img src={BA} alt="Before and after body sculpting" />
      </div>

      {/* Right Section: Choose One of My Specialties */}
      <div className="right-section">
        <h2>CHOOSE ONE OF MY SPECIALTIES</h2>
        <button onClick={handleDropdown}>Select Specialties</button>
        {showDropdown && (
          <div className="dropdown-container">
            <ul>
              {[
                { name: "EMSZero", path: "/emszero" },
                { name: "EMSPelvic", path: "/emspelvic" },
                { name: "Cavitation", path: "/cavitation" },
                { name: "Radio Frequency", path: "/radio-frequency" },
                { name: "Vacuum Therapy", path: "/vacuum-therapy" },
              ].map((item) => (
                <li key={item.name} onClick={() => handleNavigation(item.path)}>
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
