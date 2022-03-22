import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <header className="d-flex justify-content-center  py-3">
      
      <ul class="nav nav-pills   .navFont">
        <li class="nav-item"><Link to="/" class="nav-link " aria-current="page">Home</Link></li>
        
       
        <li class="nav-item"><Link to="/About" class="nav-link">About</Link></li>
        <li class="nav-item"><Link to= "/Portfolio" class="nav-link">Portfolio</Link></li>
        <li></li>
      </ul>

    </header>
  
  );
}

export default Navbar;
