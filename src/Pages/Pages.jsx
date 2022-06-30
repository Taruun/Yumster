import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";

import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";

function Pages() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
