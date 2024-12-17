import React from "react";

const ContactUs = () => {
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
      <h1 style={{ marginBottom: "20px" }}>Contact Us</h1>
      <div style={{ lineHeight: "2" }}>
        {/* Clickable Email */}
        <p>
          Email:{" "}
          <a
            href="mailto:gianaaragon@gmail.com"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            gianaaragon@gmail.com
          </a>
        </p>

        {/* Clickable Phone */}
        <p>
          Phone:
          <a
            href="tel:4135312171"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            413-531-2171
          </a>
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
              textDecoration: "none",
            }}
          >
            6 N Main St. East Longmeadow, MA
          </a>
        </p>

        {/* Clickable Website */}
        <p>
          Website:{" "}
          <a
            href="https://www.gogallagher.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            www.gogallagher.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
