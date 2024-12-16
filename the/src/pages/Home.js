// import React from "react";

// const Home = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1 style={{ fontSize: "50px", color: "#333" }}>You Found The G Spa</h1>
//       <img
//         src={require("../images/logo.JPG")}
//         alt="The G Spa"
//         style={{
//           maxWidth: "100%",
//           height: "100%",
//           // marginTop: "20px",
//           // borderRadius: "0px",
//           // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         }}
//       />
//     </div>
//   );
// };

// export default Home;

// import React from "react";

// const Home = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "black",
//         color: "white",
//         height: "100vh",
//         textAlign: "center",
//         paddingTop: "50px",
//       }}
//     >
//       <h1
//         style={{
//           fontFamily: "'Gill Sans, cursive ",
//           fontSize: "48px",
//           marginBottom: "20px",
//         }}
//       >
//         You Found The G Spa
//       </h1>
//       <img
//         src={require("../images/logo.JPG")}
//         alt="The G Spa"
//         style={{
//           maxWidth: "100%",
//           height: "auto",
//           borderRadius: "10px",
//           boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
//         }}
//       />
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh", // Ensures full height
        width: "100%", // Full width
        overflow: "hidden",
      }}
    >
      <img
        src={require("../images/logo.JPG")}
        alt="The G Spa Logo"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the image scales properly
          zIndex: -1, // Keeps it behind content
        }}
      />
    </div>
  );
};

export default Home;
