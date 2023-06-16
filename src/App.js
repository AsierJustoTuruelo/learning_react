import React, { useState } from 'react';
import './App.css';
import { Barra } from "./componentes/barra";
import { Productos } from './componentes/productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Carrito } from './paginas/carrito';

function App() {
  const [carritoCount, setCarritoCount] = useState(0);

  return (
    <Router>
      <Barra carritoCount={carritoCount} />
      <Routes>
        <Route path="/" element={<Productos setCarritoCount={setCarritoCount} />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
}

export default App;
