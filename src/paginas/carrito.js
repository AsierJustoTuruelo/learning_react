import React, { useState, useEffect } from 'react';

export const Carrito = () => {
  const [carritoCount, setCarritoCount] = useState(0);
  const [productosAgrupados, setProductosAgrupados] = useState({});
  const [precioTotal, setPrecioTotal] = useState(0); // Nuevo estado para el precio total

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
    actualizarPrecioTotal(productosAgrupados); // Calcular el precio total inicial
  }, []);

  const handleAumentarCantidad = (id) => {
    const updatedProductosAgrupados = { ...productosAgrupados };
    updatedProductosAgrupados[id].cantidad += 1;
    setProductosAgrupados(updatedProductosAgrupados);
    actualizarPrecioTotal(updatedProductosAgrupados);
    actualizarLocalStorage(updatedProductosAgrupados);
    actualizarCarritoCount(updatedProductosAgrupados);
  };

  const handleDisminuirCantidad = (id) => {
    const updatedProductosAgrupados = { ...productosAgrupados };
    if (updatedProductosAgrupados[id].cantidad > 1) {
      updatedProductosAgrupados[id].cantidad -= 1;
      setProductosAgrupados(updatedProductosAgrupados);
      actualizarPrecioTotal(updatedProductosAgrupados);
      actualizarLocalStorage(updatedProductosAgrupados);
      actualizarCarritoCount(updatedProductosAgrupados);
    } else {
      delete updatedProductosAgrupados[id];
      setProductosAgrupados(updatedProductosAgrupados);
      actualizarLocalStorage(updatedProductosAgrupados);
      actualizarCarritoCount(updatedProductosAgrupados);
    }
    actualizarPrecioTotal(updatedProductosAgrupados); // Actualizar el precio total después de eliminar un producto
  };

  const actualizarPrecioTotal = (updatedProductosAgrupados) => {
    if (Object.keys(updatedProductosAgrupados).length === 0) {
      setPrecioTotal(0);
    } else {
      let total = 0;
      Object.values(updatedProductosAgrupados).forEach((product) => {
        const { cantidad, price } = product;
        total += cantidad * price;
      });
      setPrecioTotal(total);
    }
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

  const tramitarPago = () => {
    // Simulación de proceso de pago
    console.log('Procesando pago...');

    // Aquí puedes agregar tu lógica de pago real
    // Realizar una solicitud a una pasarela de pago, procesar información, etc.

    // Luego de tramitar el pago, puedes realizar alguna acción adicional,
    // como mostrar una notificación, redireccionar a otra página, etc.
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
              <p className="producto-precio">Precio por Unidad: {price}€</p>
            </div>
          </div>
        );
      })}
      <div className="total-container">
        <h3>Total:</h3>
        <p>{precioTotal}€</p>
      </div>
      <button onClick={tramitarPago}>Pagar</button>
    </div>
  );
};
