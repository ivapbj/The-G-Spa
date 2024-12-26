import React from "react";
import ButtImage from "../images/butt.jpeg"; // Adjust path to your image
import AbsImage from "../images/abs.jpeg"; // Adjust path to your image
import ThighImage from "../images/thigh.jpeg"; // Adjust path to your image

const EmsZero = () => {
  return (
    <div
      style={{
        paddingTop: "120px", // Prevents navbar overlap
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        position: "relative", // Required for positioning "BOOK NOW" button
      }}
    >
      <h2
        style={{
          fontFamily: "'Courier', monospace",
          fontSize: "48px",
          marginTop: "150px", // Space between top of page and text
          marginBottom: "-80px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
        }}
      >
        EMSZero
      </h2>

      {/* Image Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap", // Adjusts layout for smaller screens
          marginTop: "100px",
          marginBottom: "40px",
        }}
      >
        {[ButtImage, AbsImage, ThighImage].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover", // Ensures consistent sizing
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
            }}
          />
        ))}
      </div>

      {/* Description */}
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
        Are you ready to transform your body without the effort? Say goodbye to
        endless sit-ups, arm curls, and squats! Introducing EMSZero, the
        revolutionary non-invasive solution designed to activate muscles and
        reduce fat effortlessly. With LipoMax Sculpt, you can achieve the
        equivalent of 20,000 sit-ups, arm curls, or squats during your lunch
        break! Experience a sculpted, toned body with minimal effort and maximum
        results. Book your session now and start your transformation journey
        today!
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

export default EmsZero;
