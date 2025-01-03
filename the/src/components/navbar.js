import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // For detecting clicks outside the dropdown

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown
  };

  // Function to close dropdown when clicking outside it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <img
        src={require("../images/newlogo.png")}
        alt="The G Spa Logo"
        className="navbar-logo"
      />
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="dropdown" ref={dropdownRef}>
          <span className="navbar-link" onClick={handleDropdownClick}>
            Services
          </span>{" "}
          {/*Click event added*/}
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
