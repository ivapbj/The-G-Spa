import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/contact-us" className="nav-link">
          Contact Us
        </Link>
        <Link to="/about-us" className="nav-link">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
