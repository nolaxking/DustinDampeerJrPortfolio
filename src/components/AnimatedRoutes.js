
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes,useLocation } from "react-router-dom";

import Home from "./home/App";
import Main from "./MainPage/App";


function AnimatedRoutes() {

    const loc = useLocation()
  return (
    <>
      <AnimatePresence>
        <Routes location={loc}key={loc.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
        </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
