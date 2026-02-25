import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servicios" element={<Servicios />} />
        <Route exact path="/galeria" element={<Galeria />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;