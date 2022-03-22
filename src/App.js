import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/App";
import ParticleBackround from "./components/ParticleBackround";
import About from "./components/About/App";

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>
      <ParticleBackround/>
    </>
  );
}

export default App;
