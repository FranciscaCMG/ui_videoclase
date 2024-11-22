import React from "react";
import Singin from "./components/Singin";
import Registro from "./components/Registro";
import Prueba from "./components/Prueba";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/singin" element={<Singin />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  );
}
