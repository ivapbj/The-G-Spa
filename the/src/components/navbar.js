import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "0px 20px", // Adjust padding for thicker Navbar
        position: "fixed",
        top: -40,
        left: 8,
        right: -92,
        width: "97%",
        zIndex: 1000,
        fontFamily: "'Courier', monospace",
        fontSize: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around", // Space out the logo and navigation
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Add slight shadow for depth
      }}
    >
      <img
        src={require("../images/logo.JPG")}
        alt="The G Spa Logo"
        style={{
          maxWidth: "15%", // Ensure the image does not exceed 20% of the screen width
          height: "auto", // Maintain aspect ratio
          objectFit: "contain", // Ensure the image scales properly within its container
        }}
      />
      {/* Navigation Links */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "30px", // Space between links
          textAlign: "center",
        }}
      >
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li
          style={{ position: "relative", cursor: "pointer" }}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span style={styles.link}>Services</span>
          {showDropdown && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "black",
                color: "white",
                listStyle: "none",
                padding: "10px 0",
                margin: 0,
                borderRadius: "5px",
                boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)", // Add shadow to dropdown
              }}
            >
              <li style={{ padding: "10px 20px" }}>
                <Link to="/services/body-sculpting" style={styles.dropdownLink}>
                  Body Sculpting
                </Link>
              </li>
              <li style={{ padding: "10px 20px" }}>
                <Link
                  to="/services/smile-perfected"
                  style={styles.dropdownLink}
                >
                  Smile Perfected
                </Link>
              </li>
              <li style={{ padding: "10px 20px" }}>
                <Link
                  to="/services/add-on-services"
                  style={styles.dropdownLink}
                >
                  Add-On Services
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact-us" style={styles.link}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/about-us" style={styles.link}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  link: {
    textDecoration: "none",
    color: "white",
    padding: "5px 10px",
    fontWeight: "bold",
  },
  dropdownLink: {
    textDecoration: "none",
    color: "white",
    display: "block", // Ensure dropdown links span the full width
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
};

export default Navbar;
