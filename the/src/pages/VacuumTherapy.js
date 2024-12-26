import React from "react";
import Suction2Image from "../images/suction2.jpeg"; // Adjust path to your image

const VacuumTherapy = () => {
  return (
    <div
      style={{
        paddingTop: "50px",
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <h2
        style={{
          fontFamily: "'Courier', monospace",
          fontSize: "48px",
          marginTop: "250px", // Space between top of page and text
          // marginBottom: "-80px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
        }}
      >
        Vacuum Therapy
      </h2>
      <img
        src={Suction2Image}
        alt="before and after 30"
        style={{
          width: "30%", // Adjust size as needed
          maxWidth: "600px", // Prevents image from getting too large
          height: "auto",
          borderRadius: "10px", // Optional: adds rounded corners
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)", // Optional: adds shadow to image
          marginBottom: "20px", /// Space between image and text
        }}
      />
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontFamily: "'Courier', monospace",
          fontSize: "1.2rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
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
        onClick={() => alert("Booking page coming soon!")}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "20px",
          backgroundColor: "#ff6347", // Tomato color
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        BOOK NOW
      </button>
    </div>
  );
};

export default VacuumTherapy;
