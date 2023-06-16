import React, { useState } from 'react';
import './App.css';
import { Barra } from "./componentes/barra";
import { Productos } from './componentes/productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Carrito } from './paginas/carrito';
import { Footer } from './componentes/footer';
import { Contacto } from './paginas/contact';
import { Taller } from './paginas/taller';
import { Detalles } from './paginas/detalles';

function App() {
  const [carritoCount, setCarritoCount] = useState(0);

  return (
    <Router>
      <Barra carritoCount={carritoCount} />
      <Routes>
        <Route path="/" element={<Productos setCarritoCount={setCarritoCount} />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contact" element={<Contacto/>} />
        <Route path="/taller" element={<Taller/>} />
        <Route path="/detalles" element={<Detalles/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
