import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css"; // Make sure this path is correct for your project structure

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <img
        src={require("../images/newlogo.jpg")}
        alt="The G Spa Logo"
        className="logo"
      />
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul
        className={`navLinks ${isMobileMenuOpen ? "mobileNavLinksOpen" : ""}`}
      >
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
