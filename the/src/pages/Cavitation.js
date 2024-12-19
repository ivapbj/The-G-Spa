import React from "react";
import BikiniImage from "../images/bikini.jpeg"; // Adjust path to your image

const Cavitation = () => {
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
        Cavitation
      </h2>
      <img
        src={BikiniImage}
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

export default Cavitation;
