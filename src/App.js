import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import InnovationIndex from "../src/components/innovation/InnovationIndex";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/innovations" element={<InnovationIndex />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
