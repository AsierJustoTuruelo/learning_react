import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/fussion.jpeg';
import { MenuDesplegable } from './menu-desp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Barra = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [carritoCount, setCarritoCount] = useState(0);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];

    setCarritoCount(cartItems.length);
  }, [localStorage.getItem('cartItems')]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const cartItems = localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [];

      setCarritoCount(cartItems.length);
    };

    handleStorageChange(); // Actualizar el estado inicial al montar el componente

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <header className="App-header">
      <div className='container-title'>
        <button className="menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>      
        <Link to="/">
          <img src={logo} alt='Fussion Bike' className='image-home'></img>
        </Link>
        <h1 className='title'>Fussion Bike</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            Carrito: <Link to="/carrito">{carritoCount}</Link>
          </li>
        </ul>
      </nav>
      {menuVisible && <MenuDesplegable />}
    </header>
  );
};
