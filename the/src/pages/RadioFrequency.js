import React from "react";
import RadioFrequencyImage from "../images/Radiofrequency.jpeg"; // Adjust path to your image

const RadioFrequency = () => {
  return (
    <div
      style={{
        minHeight: "100vh", // Ensure full viewport height
        paddingTop: "50px",
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        position: "relative", // For absolute button positioning
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: "80px", // Add space for button
        "@media (max-width: 768px)": {
          paddingBottom: "70px",
        },
      }}
    >
      <h2
        style={{
          fontFamily: "'Garmond', serif",
          fontSize: "3rem", // Use rem for responsive font size
          fontWeight: "lighter",
          marginTop: "0px", // Adjust for better spacing
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
            marginTop: "50px",
          },
        }}
      >
        Radio Frequency
      </h2>
      <img
        src={RadioFrequencyImage}
        alt="before and after 30"
        style={{
          width: "80%", // Adjust size as needed
          maxWidth: "500px", // Prevents image from getting too large
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
          fontSize: "1.5rem", // Keep the font size at 1.2 rem
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      >
        Radiofrequency (RF) therapy for the body is a non-invasive treatment
        that uses radiofrequency energy to heat the deeper layers of the skin
        and underlying tissues. This heat stimulates collagen production,
        improves skin elasticity, and promotes tissue tightening. RF therapy is
        commonly used for body contouring, reducing the appearance of cellulite,
        and tightening loose or sagging skin. It can also enhance skin texture,
        reduce stubborn fat pockets, and improve overall skin tone. The
        treatment is painless, requires no downtime, and is suitable for various
        areas of the body, including the abdomen, thighs, and arms, providing a
        safe and effective solution for those seeking non-surgical body
        rejuvenation.
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

export default RadioFrequency;
