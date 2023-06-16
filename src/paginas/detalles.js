import React, { useState } from 'react';
import '../index.css';

export const Detalles = ({ producto }) => {
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  const toggleImagenAmpliada = () => {
    setImagenAmpliada(!imagenAmpliada);
  };

  return (
    <div className="detalles-container">
      <div className="producto-imagen" onClick={toggleImagenAmpliada}>
        <img src={producto.imgUrl} alt="" />
      </div>
      {imagenAmpliada && (
        <div className="imagen-ampliada" onClick={toggleImagenAmpliada}>
          <img src={producto.imgUrl} alt="" />
        </div>
      )}
      <div className="producto-detalles">
        <h2 className="producto-nombre">{producto.name}</h2>
        <p className="producto-precio">{producto.price} $</p>
        <p className="producto-descripcion">{producto.description}</p>
      </div>
    </div>
  );
};
