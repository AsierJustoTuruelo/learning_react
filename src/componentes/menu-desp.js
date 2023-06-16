import React from 'react';
import { Link } from 'react-router-dom';

export const MenuDesplegable = () => {
  return (
    <div className="menu-desplegable">
      <ul className="menu-list">
        <li className="menu-item">Bicicletas de montaña</li>
        <li className="menu-item">Bicicletas de carretera</li>
        <li className="menu-item">
          <Link to="/taller">Taller de Bicicletas</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};
