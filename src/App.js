import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import FooterHome from "./components/footer/Footer";
import CopyRigthFooter from "./components/footer/CopyRigthFooter";
import InnovationIndex from "./components/innovation/InnovationIndex";

// Wrapper for conditional footer logic
const AppWithConditionalFooter = () => {
  const location = useLocation();

  // Determine which footer to render
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovations" element={<InnovationIndex />} />
      </Routes>
      {isHomePage ? <FooterHome /> : <CopyRigthFooter />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWithConditionalFooter />
    </Router>
  );
}

export default App;
