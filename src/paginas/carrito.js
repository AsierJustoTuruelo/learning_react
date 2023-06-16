import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/fussion.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import storeItems from '../data/products.json';

export const Carrito = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [carritoCount, setCarritoCount] = useState(0);
  const [productosAgrupados, setProductosAgrupados] = useState({});

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];

    const productosAgrupados = {};

    cartItems.forEach((product) => {
      const { id } = product;
      if (productosAgrupados[id]) {
        productosAgrupados[id].cantidad += 1;
      } else {
        productosAgrupados[id] = { ...product, cantidad: 1 };
      }
    });

    setProductosAgrupados(productosAgrupados);
    actualizarCarritoCount(productosAgrupados);
  }, []);

  const handleAumentarCantidad = (id) => {
    const updatedProductosAgrupados = { ...productosAgrupados };
    updatedProductosAgrupados[id].cantidad += 1;
    setProductosAgrupados(updatedProductosAgrupados);
    actualizarPrecioTotal(id);
    actualizarLocalStorage(updatedProductosAgrupados);
    actualizarCarritoCount(updatedProductosAgrupados);
  };

  const handleDisminuirCantidad = (id) => {
    const updatedProductosAgrupados = { ...productosAgrupados };
    if (updatedProductosAgrupados[id].cantidad > 1) {
      updatedProductosAgrupados[id].cantidad -= 1;
      setProductosAgrupados(updatedProductosAgrupados);
      actualizarPrecioTotal(id);
      actualizarLocalStorage(updatedProductosAgrupados);
      actualizarCarritoCount(updatedProductosAgrupados);
    } else {
      delete updatedProductosAgrupados[id];
      setProductosAgrupados(updatedProductosAgrupados);
      actualizarLocalStorage(updatedProductosAgrupados);
      actualizarCarritoCount(updatedProductosAgrupados);
    }
  };

  const actualizarPrecioTotal = (id) => {
    const updatedProductosAgrupados = { ...productosAgrupados };
    const product = updatedProductosAgrupados[id];
    product.precioTotal = product.cantidad * product.price;
    setProductosAgrupados(updatedProductosAgrupados);
  };

  const actualizarLocalStorage = (updatedCartItems) => {
    if (Object.keys(updatedCartItems).length === 0) {
      localStorage.removeItem('cartItems');
    } else {
      localStorage.setItem('cartItems', JSON.stringify(Object.values(updatedCartItems)));
    }
  };
  

  const actualizarCarritoCount = (updatedCartItems) => {
    let count = 0;
    Object.values(updatedCartItems).forEach((product) => {
      const cantidad = product.cantidad || 0;
      count += parseInt(cantidad, 10);
    });
    setCarritoCount(count);
  };

  return (
    <div className="carrito-container">
      <h1>Carrito de compras</h1>
      {Object.entries(productosAgrupados).map(([id, product]) => {
        const { cantidad, price, imgUrl, name, precioTotal } = product;

        return (
          <div className="productos-carro" key={id}>
            <div className="producto-imagen">
              <img src={imgUrl} alt="" />
            </div>
            <div className="producto-info">
              <h2 className="producto-nombre">{name}</h2>
              <div className="producto-cantidad">
                <button onClick={() => handleDisminuirCantidad(id)}>-</button>
                <span>{cantidad}</span>
                <button onClick={() => handleAumentarCantidad(id)}>+</button>
              </div>
              <p className="producto-precio">Precio Total: {precioTotal}$</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
