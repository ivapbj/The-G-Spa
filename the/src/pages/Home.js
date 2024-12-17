const Home = () => {
  return (
    <div
      style={{
        display: "flex", // Flexbox to center content
        justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
        minHeight: "100vh", // Full viewport height
        width: "100%", // Full width
        backgroundColor: "black", // Background color for better visibility
        overflow: "hidden", // Prevent scrollbars if content overflows
      }}
    >
      <img
        src={require("../images/logo.JPG")}
        alt="The G Spa Logo"
        style={{
          maxWidth: "90%", // Ensure the image does not exceed 90% of the screen width
          height: "auto", // Maintain aspect ratio
          objectFit: "contain", // Ensure the image scales properly within its container
        }}
      />
    </div>
  );
};

export default Home;
