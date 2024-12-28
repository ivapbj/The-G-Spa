import React from "react";
import BeforeSmile from "../images/BeforeSmile.JPEG";
import AfterSmile from "../images/AfterSmile.JPEG";

const SmilePerfected = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "20px",
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
      <h1
        style={{
          fontFamily: "Garamond, serif",
          fontSize: "3rem", // Using rem units
          fontWeight: "lighter",
          marginTop: "50px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
            marginTop: "30px",
          },
        }}
      >
        Smile Perfected
      </h1>
      <h2
        style={{
          fontFamily: "Garamond, serif",
          fontSize: "3rem",
          fontWeight: "lighter",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
          },
        }}
      >
        20 MIN
      </h2>
      <img
        src={BeforeSmile}
        alt="before smile"
        style={{
          width: "80%", // Use % for responsiveness
          maxWidth: "500px", // Limiting max width
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
          marginBottom: "20px",
          "@media (max-width: 768px)": {
            width: "90%",
          },
        }}
      />
      <img
        src={AfterSmile}
        alt="after smile"
        style={{
          width: "80%", // Use % for responsiveness
          maxWidth: "500px", // Limiting max width
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
          fontFamily: "'Garamond', serif",
          fontSize: "1.5rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      >
        Smile Perfected teeth whitening is fast, effective, and
        sensitivity-free! Smile Perfected teeth whitening is a quick and easy
        way to brighten your smile. This professional-grade whitening system
        works fast, delivering noticeable results in just a few uses. The best
        part? It's gentle and sensitivity-free, making it a comfortable option
        for everyone. Ask us about Smile Perfected and take the first step
        towards a whiter, brighter smile today!
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

export default SmilePerfected;
