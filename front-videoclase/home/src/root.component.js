import React from "react";
import Home from "./components/Home";
import HomeVC from "./components/HomeVC";
import PlantillaN from "./components/PlantillaN";
import PruebaXML from "./components/PruebaXML";
import Blanco from "./components/Blanco";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeVC" element={<HomeVC />} />
        <Route path="/PlantillaN" element={<PlantillaN />} />
        <Route path="/PruebaXML" element={<PruebaXML />} />
        <Route path="/Blanco" element={<Blanco />} />


      </Routes>
    </BrowserRouter>
  );
}