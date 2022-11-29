import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Projetos from "./components/pages/Projetos";
import Sobre from "./components/pages/Sobre";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
