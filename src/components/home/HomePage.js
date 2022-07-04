import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";
function HomePage() {
  return (
    <motion.div
    exit={{y:-100,ease: "easeOut"}}
    
   
    >
      <div className=" container ">
        <Link to="/Main">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </Link>

        <div className="container fixed-bottom mt-auto typing-demo">
          <div className="jumbotro mt-1">
            <h1>
              Hello World <br />
              I AM <br />
              Dustin Dampeer Jr <br />
            </h1>
            <h2>Software Delevoper</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
