import React from "react";
import SaunaImage from "../images/sauna.jpeg"; // Adjust path to your image
import RedlightImage from "../images/redlight.jpeg"; // Adjust path to your image
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
          fontFamily: "'Courier', monospace",
          fontSize: "48px",
          marginTop: "250px", // Space between top of page and text
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
          marginBottom: "20px",
        }}
      >
        Red Light Therapy can be added on with any of our other spa services.
        Infrared Red Light Therapy: Whether you are 39 or an athlete or simply
        enjoy an active lifestyle, our advanced red light therapy lamp with dual
        wavelengths of 660nm and 850nm allow you to experience the benefits of
        red light therapy. Red light therapy (RLT) is a non-invasive treatment
        that uses low-wavelength red or near-infrared light to penetrate the
        skin and stimulate cellular function. It’s commonly used for a variety
        of therapeutic purposes Red light therapy (RLT) is a treatment that uses
        low levels of red light to reportedly improve your skin’s appearance,
        like reducing wrinkles, scars, redness and acne. It’s also touted to
        treat other medical conditions. Red light therapy is promoted as a
        treatment for some common skin conditions, including to: Improve wound
        healing. Reduce stretch marks. Reduce wrinkles, fine lines and age
        spots. Improve facial texture. Improve psoriasis, rosacea and eczema.
        Improve scars. Improve sun-damaged skin. Improve hair growth. Improve
        acne.
      </p>
      <h2
        style={{
          fontFamily: "'Courier', monospace",
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
          marginBottom: "-20px",
        }}
      >
        Sauna Blanket Benefits 30 mins Relax and detox with our sauna blanket.
        This is a great add on to any of our body sculpting services. There are
        many health benefits, some listed below. Detoxification: The heat helps
        stimulate sweating, which can aid in flushing toxins from the body and
        support in burning calories and weight loss. Pain Relief: Infrared heat
        may reduce inflammation and provide relief from sore muscles, joint
        pain, or chronic conditions like arthritis. Improved Circulation: The
        increased blood flow helps improve oxygenation and nutrient delivery to
        tissues. Stress Reduction: The heat can promote relaxation, reduce
        tension, and improve mood. Skin Health: Regular use may help improve
        skin tone and texture by promoting blood flow and sweat, which can clear
        pores.
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
export default AddonServices;
