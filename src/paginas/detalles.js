import React, { useState } from 'react';
import '../index.css';

export const Detalles = ({ producto, onClose }) => {
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  const toggleImagenAmpliada = () => {
    setImagenAmpliada(!imagenAmpliada);
  };

  const cerrarDetalles = () => {
    setImagenAmpliada(false);
    onClose();
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
        <button className="cerrar-detalles" onClick={cerrarDetalles}>
          Cerrar detalles
        </button>
      </div>
    </div>
  );
};
