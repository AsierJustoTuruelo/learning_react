import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuDesplegable = ({ onClose }) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const closeMenu = () => {
    onClose();
  };

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  return (
    <div className="menu-desplegable">
      <ul className="menu-list">
        <li className="menu-item" onClick={closeMenu}>
          Bicicletas de montaña
        </li>
        <li className="menu-item" onClick={closeMenu}>
          Bicicletas de carretera
        </li>
        <li className="menu-item">
          <Link to="/taller" onClick={closeMenu}>
            Taller de Bicicletas
          </Link>
        </li>
        <li className={`menu-item ${subMenuVisible ? 'sub-menu-open' : ''}`}>
          <div onClick={toggleSubMenu}>
            Cubiertas
          </div>
          {subMenuVisible && (
            <ul className="sub-menu">
              <li className="menu-item-interno" onClick={closeMenu}>
                <Link to="/cubiertas_montana">
                  Cubiertas de montaña
                </Link>
              </li>
              <li className="menu-item-interno" onClick={closeMenu}>
                <Link to="/paginas/cubiertas-de-carretera">
                  Cubiertas de carretera
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <Link to="/contact" onClick={closeMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};
