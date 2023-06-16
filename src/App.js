import React, { useState } from 'react';
import './App.css';
import { Barra } from "./componentes/barra";
import { Productos } from './componentes/productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [carritoCount, setCarritoCount] = useState(0);

  return (
    <Router>
      <Barra carritoCount={carritoCount} />
      <Routes>
        <Route path="/" element={<Productos setCarritoCount={setCarritoCount} />} />
      </Routes>
    </Router>
  );
}

export default App;
