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
        padding: "10px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 0,
          padding: 0,
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
                // border: "1px solid white",
                borderRadius: "5px",
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
  },
  dropdownLink: {
    textDecoration: "none",
    color: "white",
  },
};

export default Navbar;
