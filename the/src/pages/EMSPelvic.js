import React from "react";
import ReproductionImage from "../images/ReproductionImage.jpeg"; // Adjust path to your image

const EmsPelvic = () => {
  return (
    <div
      style={{
        paddingTop: "120px", // Prevents navbar overlap
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        position: "relative", // Required for positioning "BOOK NOW" button
      }}
    >
      <h3
        style={{
          fontFamily: "'Courier', monospace",
          fontSize: "48px",
          marginTop: "150px", // Space between top of page and text
          marginBottom: "20px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
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
          }}
        />
      </div>

      {/* Description */}
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

      {/* Image Section
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
            marginBottom: "120px", // Space between image and text
          }}
        />
      </div> */}

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

export default EmsPelvic;
