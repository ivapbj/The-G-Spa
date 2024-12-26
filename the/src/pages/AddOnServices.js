import React from "react";
import SaunaImage from "../images/sauna.jpeg"; // Adjust path to your image
import RedlightImage from "../images/redlight.jpeg"; // Adjust path to your image
import VibrationTherapyImage from "../images/VibrationTherapyImage.jpeg"; // Adjust path to your image
const AddonServices = () => {
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
          fontFamily: "'New Time Roman', monospace",
          fontSize: "48px",
          marginTop: "50px", // Space between top of page and text
          // marginBottom: "-80px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
        }}
      >
        Redlight Therapy
      </h2>
      <img
        src={RedlightImage}
        alt="before smile"
        style={{
          width: "40%", // Adjust size as needed
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
          fontFamily: "'New Time Roman', monospace",
          fontSize: "1.2rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          marginBottom: "20px",
        }}
      >
        Red Light Therapy can be added on with any of our other spa services.
        Infrared Red light therapy (RLT) is a non-invasive treatment that uses
        low-wavelength red or near-infrared light to penetrate the skin and
        stimulate cellular function and improve your skin's appearance. Red
        light therapy is promoted as a treatment for some common skin
        conditions, including:
      </p>
      <ul
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontFamily: "'New Time Roman', monospace",
          fontSize: "1.2rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          marginBottom: "20px",
          paddingLeft: "20px",
          listStyleType: "disc",
          textAlign: "center", // Aligns the bullet
          listStylePosition: "inside", // Aligns the bullet
        }}
      >
        <li>Improve wound healing</li>
        <li>Reduce stretch marks</li>
        <li>Reduce wrinkles, fine lines, and age spots</li>
        <li>Improve facial texture</li>
        <li>Improve psoriasis, rosacea, and eczema</li>
        <li>Improve scars</li>
        <li>Improve sun-damaged skin</li>
        <li>Improve hair growth</li>
        <li>Improve acne</li>
      </ul>
      <h2
        style={{
          fontFamily: "'New Time Roman', monospace",
          fontSize: "48px",
          marginTop: "50px", // Space between top of page and text
          // marginBottom: "-80px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
        }}
      >
        Sauna Blanket
      </h2>
      <img
        src={SaunaImage}
        alt="before and after 30"
        style={{
          width: "40%", // Adjust size as needed
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
          fontFamily: "'New Time Roman', monospace",
          fontSize: "1.2rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          marginBottom: "20px",
        }}
      >
        Relax and detox for 30 minutes with our sauna blanket. This is a great
        add on to any of our body sculpting services. There are many health
        benefits, some listed below:
      </p>
      <ul
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontFamily: "'New Time Roman', monospace",
          fontSize: "1.2rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
          marginBottom: "20px",
          paddingLeft: "20px",
          listStyleType: "disc",
          textAlign: "center", // Aligns the bullet
          listStylePosition: "inside", // Aligns the bullet
        }}
      >
        <li>
          Detoxification: The heat helps stimulate sweating, which can aid in
          flushing toxins from the body and support in burning calories and
          weight loss.
        </li>
        <li>
          Pain Relief: Infrared heat may reduce inflammation and provide relief
          from sore muscles, joint pain, or chronic conditions like arthritis.
        </li>
        <li>Reduce wrinkles, fine lines, and age spots</li>
        <li>
          Improved Circulation: The increased blood flow helps improve
          oxygenation and nutrient delivery to tissues.
        </li>
        <li>
          Stress Reduction: The heat can promote relaxation, reduce tension, and
          improve mood.
        </li>
        <li>
          {" "}
          Skin Health: Regular use may help improve skin tone and texture by
          promoting blood flow and sweat, which can clear pores.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "'New Time Roman', monospace",
          fontSize: "48px",
          marginTop: "50px", // Space between top of page and text
          // marginBottom: "-80px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Text shadow for visibility
        }}
      >
        Vibration Therapy Plate
      </h3>
      <img
        src={VibrationTherapyImage}
        alt="before and after 30"
        style={{
          width: "60%", // Adjust size as needed
          maxWidth: "600px", // Prevents image from getting too large
          height: "auto",
          borderRadius: "10px", // Optional: adds rounded corners
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)", // Optional: adds shadow to image
          marginBottom: "20px", /// Space between image and text
        }}
      />

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
export default AddonServices;
