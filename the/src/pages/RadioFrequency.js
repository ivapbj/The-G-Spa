import React from "react";
import RadioFrequencyImage from "../images/Radiofrequency.jpeg"; // Adjust path to your image

const RadioFrequency = () => {
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
        Radio Frequency
      </h2>
      <img
        src={RadioFrequencyImage}
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
        rejuvenation. Radiofrequency (RF) therapy for the body is a non-invasive
        treatment that uses radiofrequency energy to heat the deeper layers of
        the skin and underlying tissues. This heat stimulates collagen
        production, improves skin elasticity, and promotes tissue tightening. RF
        therapy is commonly used for body contouring, reducing the appearance of
        cellulite, and tightening loose or sagging skin. It can also enhance
        skin texture, reduce stubborn fat pockets, and improve overall skin
        tone. The treatment is painless, requires no downtime, and is suitable
        for various areas of the body, including the abdomen, thighs, and arms,
        providing a safe and effective solution for those seeking non-surgical
        body rejuvenation.
      </p>
      {/* BOOK NOW Button */}
      <button
        onClick={() =>
          (window.location.href = "https://calendly.com/at-the-gspa")
        } // Change to redirect to Calendly
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

export default RadioFrequency;
