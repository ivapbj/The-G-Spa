import React from "react";
import CavitationImage from "../images/cavitation.jpeg"; // Adjust path to your image

const Cavitation = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "50px",
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        paddingLeft: "15px",
        paddingRight: "15px",
        position: "relative",
        paddingBottom: "80px", // Added padding bottom to accomodate button
        "@media (max-width: 768px)": {
          paddingBottom: "70px",
        },
      }}
    >
      <h2
        style={{
          fontFamily: "Garamond, serif",
          fontWeight: "lighter",
          fontSize: "3rem",
          marginTop: "-50px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
          },
        }}
      >
        Cavitation
      </h2>
      <img
        src={CavitationImage}
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
          fontFamily: "Garamond, serif",
          fontWeight: "lighter",
          fontSize: "1.5rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            fontSize: "1rem",
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      >
        Body cavitation, also known as ultrasonic cavitation, is a non-invasive
        treatment that uses low-frequency sound waves to target and break down
        fat cells beneath the skin. The sound waves create microscopic bubbles
        in the fat tissues, causing them to collapse and release their contents,
        which are then naturally eliminated by the body’s lymphatic system. This
        process helps reduce localized fat, contour the body, and improve skin
        texture. Body cavitation is commonly used on areas such as the abdomen,
        thighs, and lower back, providing a painless alternative to liposuction.
        The treatment is non-surgical, requires no downtime, and can result in a
        smoother, more toned appearance with regular sessions.{" "}
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

export default Cavitation;
