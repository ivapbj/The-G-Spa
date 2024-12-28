import React from "react";
import Suction2Image from "../images/suction2.jpeg"; // Adjust path to your image

const VacuumTherapy = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "50px",
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        position: "relative",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: "80px",
        "@media (max-width: 768px)": {
          paddingBottom: "70px",
        },
      }}
    >
      <h2
        style={{
          fontFamily: "'Garmond', serif",
          fontSize: "3rem", // Responsive font size
          fontWeight: "lighter",
          marginTop: "0px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
            marginTop: "50px",
          },
        }}
      >
        Vacuum Therapy
      </h2>
      <img
        src={Suction2Image}
        alt="before and after 30"
        style={{
          width: "80%",
          maxWidth: "500px",
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
          marginBottom: "20px",
          "@media (max-width: 768px)": {
            width: "90%",
          },
        }}
      />
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontFamily: "'Garmond', serif",
          fontSize: "1.5rem", // Keep font size at 1.5 rem
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      >
        Vacuum therapy for the buttocks is a non-invasive treatment designed to
        enhance the shape and appearance of the buttocks by using suction cups
        or devices to stimulate blood flow, increase circulation, and promote
        lymphatic drainage. This process helps to lift, firm, and contour the
        buttocks by encouraging the production of collagen and elastin,
        improving skin elasticity, and reducing the appearance of cellulite. The
        treatment is pain-free, requires no downtime, and can provide gradual,
        natural-looking results. Vacuum therapy is often used as a non-surgical
        alternative to enhance the buttocks without the need for implants or fat
        injections.
      </p>
      {/* BOOK NOW Button */}
      <button
        onClick={() =>
          (window.location.href = "https://calendly.com/at-the-gspa")
        }
        style={{
          position: "absolute",
          bottom: "20px",
          right: "10px",
          backgroundColor: "#ff6347",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          "@media (max-width: 768px)": {
            bottom: "10px",
            right: "5px",
            fontSize: "14px",
            padding: "8px 16px",
          },
        }}
      >
        BOOK NOW
      </button>
    </div>
  );
};

export default VacuumTherapy;
