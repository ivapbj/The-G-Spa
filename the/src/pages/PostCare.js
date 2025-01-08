import React from "react";
import PostcareImage from "../images/postcareimage.jpg";

const Postcare = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "150px",
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        position: "relative",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={PostcareImage}
        alt="postcare"
        style={{
          width: "100%", // Makes image responsive
          maxWidth: "500px", // Ensures it doesn't exceed this width
          height: "auto",
        }}
      />
    </div>
  );
};

export default Postcare;
