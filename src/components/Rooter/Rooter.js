import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Logement from "../../pages/Logement/Logement";
import NotFound from "../../pages/NotFound/NotFound";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
