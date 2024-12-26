import React from "react";
import BeforeSmile from "../images/BeforeSmile.JPEG"; // Adjust path to your image
import AfterSmile from "../images/AfterSmile.JPEG"; // Adjust path to your image

const SmilePerfected = () => {
  return (
    <div
      style={{
        paddingTop: "50px",
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <h1
        style={{
          fontFamily: "'New Times Roman', monospace",
          fontSize: "48px",
          marginTop: "50px", // Space between top of page and text
          // marginBottom: "-80px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
        }}
      >
        Smile Perfected
      </h1>
      <h2
        style={{
          fontFamily: "'New Times Roman', monospace, bold", // Optional: font style
          fontSize: "48px",
        }}
      >
        20 MIN
      </h2>
      <img
        src={BeforeSmile}
        alt="before smile"
        style={{
          width: "50%", // Adjust size as needed
          maxWidth: "600px", // Prevents image from getting too large
          height: "auto",
          borderRadius: "10px", // Optional: adds rounded corners
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)", // Optional: adds shadow to image
          marginBottom: "20px", /// Space between image and text
        }}
      />
      <img
        src={AfterSmile}
        alt="before and after 30"
        style={{
          width: "50%", // Adjust size as needed
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
          fontFamily: "'New Times Roman'",
          fontSize: "1.2rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
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
export default SmilePerfected;
