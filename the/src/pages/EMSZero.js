import React from "react";
import ButtImage from "../images/butt.jpeg";
import AbsImage from "../images/abs.jpeg";
import ThighImage from "../images/thigh.jpeg";

const EmsZero = () => {
  return (
    <div
      style={{
        minHeight: "100vh", // Ensure full viewport height
        paddingTop: "120px",
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
          fontFamily: "Garamond, serif",
          fontSize: "3rem", // Use rem for responsiveness
          marginTop: "0px",
          marginBottom: "-50px", // Adjusted
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          fontWeight: "lighter",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
            marginTop: "50px",
          },
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
          flexWrap: "wrap",
          marginTop: "80px", // Adjust for better spacing
          marginBottom: "40px",
        }}
      >
        {[ButtImage, AbsImage, ThighImage].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{
              width: "280px", // Slightly smaller for mobile
              height: "280px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
              "@media (max-width: 768px)": {
                width: "220px",
                height: "220px",
              },
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
          fontFamily: "Garamond, serif",
          fontSize: "1.5rem", // Use rem
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            fontSize: "1rem",
          },
        }}
      >
        Are you ready to transform your body without the effort? Say goodbye to
        endless sit-ups, arm curls, and squats! Introducing EMSZero, the
        revolutionary non-invasive solution designed to activate muscles and
        reduce fat effortlessly. With EMSZero, you can achieve the equivalent of
        20,000 sit-ups, arm curls, or squats during your lunch break! Experience
        a sculpted, toned body with minimal effort and maximum results. Book
        your session now and start your transformation journey today!
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

export default EmsZero;
