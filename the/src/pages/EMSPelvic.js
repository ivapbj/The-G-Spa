import React from "react";
import ReproductionImage from "../images/ReproductionImage.jpeg"; // Adjust path to your image

const EmsPelvic = () => {
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
      <h3
        style={{
          fontFamily: "'Garamond', serif",
          fontSize: "3rem", // Responsive font size
          fontWeight: "lighter",
          marginTop: "0px", // Adjusted for better spacing
          marginBottom: "20px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
            marginTop: "50px",
          },
        }}
      >
        EMS Pelvic
      </h3>
      {/* Image Section */}
      <div>
        <img
          src={ReproductionImage}
          alt="reprduction graph"
          style={{
            width: "80%", // Adjust size as needed
            maxWidth: "600px", // Prevents image from getting too large
            height: "auto",
            borderRadius: "10px", // Optional: adds rounded corners
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)", // Optional: adds shadow to image
            marginBottom: "50px", // Space between image and text
            "@media (max-width: 768px)": {
              width: "90%",
            },
          }}
        />
      </div>

      {/* Description */}
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontFamily: "'Garamond', serif",
          fontSize: "1.5rem", // KEEPING the font size here
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          "@media (max-width: 768px)": {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      >
        EMSPelvic is a non-invasive seat that uses electromagnetic waves to
        stimulate pelvic floor muscles. The chair is used to treat urinary
        incontinence caused by weakened pelvic floor muscles and postpartum
        recovery. During a 30 minute session, the seat generates thousands of
        pelvic floor muscle contractions, which is equivalent to doing about
        11,000 Kegel exercises. Most people need six sessions over three weeks
        to see optimal results. During the procedure, you remain fully clothed
        while you sit on the EMS seat for 30 minutes. You can enjoy some of our
        other treatment options during this procedure.
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

export default EmsPelvic;
