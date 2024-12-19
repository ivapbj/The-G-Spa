import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodySculpting from "./pages/BodySculpting";
import EmsZero from "./pages/EmsZero";
import EmsPelvic from "./pages/EmsPelvic";
import Cavitation from "./pages/Cavitation";
import RadioFrequency from "./pages/RadioFrequency";
import VacuumTherapy from "./pages/VacuumTherapy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BodySculpting />} />
        <Route path="/emzero" element={<EmsZero />} />
        <Route path="/emspelvic" element={<EmsPelvic />} />
        <Route path="/cavitation" element={<Cavitation />} />
        <Route path="/radio-frequency" element={<RadioFrequency />} />
        <Route path="/vacuum-therapy" element={<VacuumTherapy />} />
      </Routes>
    </Router>
  );
}

export default App;
