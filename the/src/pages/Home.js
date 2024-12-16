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
