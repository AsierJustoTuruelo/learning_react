import React, { useState } from 'react';

const Carrito = () => {
  const [carritoItems, setCarritoItems] = useState([]);

  // Función para agregar un artículo al carrito
  const agregarAlCarrito = (item) => {
    setCarritoItems([...carritoItems, item]);
  };

  // Función para eliminar un artículo del carrito
  const eliminarDelCarrito = (item) => {
    const nuevosItems = carritoItems.filter((i) => i !== item);
    setCarritoItems(nuevosItems);
  };

  // Calcular la cantidad total de artículos en el carrito
  const calcularCantidadTotal = () => {
    return carritoItems.length;
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carritoItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => eliminarDelCarrito(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Cantidad total: {calcularCantidadTotal()}</p>
      <button onClick={() => agregarAlCarrito('Nuevo artículo')}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Carrito;
