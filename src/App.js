import React from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ParticleBackround from "./components/ParticleBackround";

import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
        <ParticleBackround />
      </Router>
    </>
  );
}

export default App;
