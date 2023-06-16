import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/fussion.jpeg';
import { MenuDesplegable } from './menu-desp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Barra = ({ carritoCount }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="App-header">
      <div className='container-title'>
        <button className="menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>      
        <Link to="/"> {/* Agrega el componente Link y establece la ruta de destino */}
          <img src={logo} alt='Fussion Bike' className='image-home'></img>
        </Link>
        <h1 className='title'>Fussion Bike</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            Carrito: <Link to="/paginas/carrito">{carritoCount}</Link>
          </li>
        </ul>
      </nav>
      {menuVisible && <MenuDesplegable />}
    </header>
  );
};

export default Barra;
