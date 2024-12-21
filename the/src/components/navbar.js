import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <nav className="navbar">
      <img
        src={require("../images/newlogo.jpg")}
        alt="The G Spa Logo"
        className="navbar-logo"
      />
      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={handleDropdown}
          onMouseLeave={handleDropdown}
        >
          <span className="navbar-link">Services</span>
          {showDropdown && (
            <ul className="dropdown-list">
              <li>
                <Link to="/services/body-sculpting" className="dropdown-item">
                  Body Sculpting
                </Link>
              </li>
              <li>
                <Link to="/services/smile-perfected" className="dropdown-item">
                  Smile Perfected
                </Link>
              </li>
              <li>
                <Link to="/services/add-on-services" className="dropdown-item">
                  Add-On Services
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact-us" className="navbar-link">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="navbar-link">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
