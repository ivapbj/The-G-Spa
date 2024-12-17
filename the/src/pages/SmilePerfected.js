import React from "react";

const SmilePerfected = () => {
  return (
    <div
      style={{
        backgroundColor: "black", // Background color for the page
        color: "white",
        minHeight: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontFamily: "'Courier', monospace", // Optional: font style
          fontSize: "48px",
          marginTop: "-00px", // Space between top of page and text
          // marginBottom: "40px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
        }}
      >
        Smile Perfected
      </h1>
      <p
        style={{
          fontFamily: "'Courier', monospace",
          fontSize: "18px",
          marginTop: "30px", // Space between text and image
          maxWidth: "800px", // Controls the width of the paragraph
          color: "#ddd",
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
    </div>
  );
};

export default SmilePerfected;
