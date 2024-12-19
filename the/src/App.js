import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import BodySculpting from "./pages/BodySculpting";
import EmsZero from "./pages/EmsZero";
import EmsPelvic from "./pages/EmsPelvic";
import Cavitation from "./pages/Cavitation";
import RadioFrequency from "./pages/RadioFrequency";
import VacuumTherapy from "./pages/VacuumTherapy";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import SmilePerfected from "./pages/SmilePerfected";
import AddonServices from "./pages/AddonServices";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/smile-perfected" element={<SmilePerfected />} />
        <Route path="/services/addon-services" element={<AddonServices />} />

        <Route path="/services/body-sculpting" element={<BodySculpting />} />
        <Route path="/emszero" element={<EmsZero />} />
        <Route path="/emspelvic" element={<EmsPelvic />} />
        <Route path="/cavitation" element={<Cavitation />} />
        <Route path="/radio-frequency" element={<RadioFrequency />} />
        <Route path="/vacuum-therapy" element={<VacuumTherapy />} />
      </Routes>
    </Router>
  );
}

export default App;
