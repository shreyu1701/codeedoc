import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Consultation from "./pages/consultation";
import Services from "./pages/services";
import Home from "./pages/home/index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
