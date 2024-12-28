import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Garamound, serif",
        fontWeight: "lighter",
      }}
    >
      {/* Header with Responsive Font Size and Margin*/}
      <h1
        style={{
          marginTop: "-25rem", // Adjusted margin top for smaller screens, using rem for responsiveness
          marginBottom: "1.5rem", // Adjusted margin bottom for better spacing
          fontSize: "2.5rem", // Slightly smaller font size on mobile
          fontFamily: "Garamound",
          fontWeight: "lighter",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
        }}
      >
        Contact Us
      </h1>
      {/* Content Container for Contact Info with Responsive Font Size*/}
      <div
        style={{
          lineHeight: "1.8", // slightly smaller line height
          fontSize: "1.5rem", // Adjusted for smaller screens
          maxWidth: "90%", // added max width for small screens
        }}
      >
        {/* Clickable Email */}
        <p>
          Email:{" "}
          <a
            href="mailto:gianaaragon@gmail.com"
            style={{
              color: "white",
              textDecoration: "underline", // Underline links for better visibility
            }}
          >
            At.the.gspa@gmail.com
          </a>
        </p>

        {/* Clickable Phone */}
        <p>
          Phone:
          <a> 413-288-1668</a>
        </p>

        {/* Clickable Address */}
        <p>
          Address:{" "}
          <a
            href="https://www.google.com/maps?q=6+N+Main+St,+East+Longmeadow,+MA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "underline", // Underline links for better visibility
            }}
          >
            6 N.Main St. EastLongmeadow, MA
          </a>
        </p>

        {/* Clickable Website */}
        <p>
          Website:{" "}
          <a
            href="https://www.the-gspa.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "underline", // Underline links for better visibility
            }}
          >
            www.the-gspa.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
