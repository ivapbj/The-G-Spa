import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import BodySculpting from "./pages/BodySculpting"; // Import Body Sculpting page
import SmilePerfected from "./pages/SmilePerfected"; // Import Smile Perfected page
import AddOnServices from "./pages/AddOnServices"; // Import Add-on Services page

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "60px" }}>
        {" "}
        {/* Adds space below the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services/body-sculpting" element={<BodySculpting />} />
          <Route
            path="/services/smile-perfected"
            element={<SmilePerfected />}
          />
          <Route path="/services/add-on-services" element={<AddOnServices />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
