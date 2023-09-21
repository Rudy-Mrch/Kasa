import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
