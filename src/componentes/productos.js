import React, { useState } from 'react';
import { Detalles } from '../paginas/detalles';
import storeItems from '../data/products.json';

export const Productos = ({ setCarritoCount }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const guardarProductoEnCarrito = (producto) => {
    const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
    cartItems.push(producto);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Producto agregado al carrito y guardado en localStorage');
  };

  const handleAddToCart = (product) => {
    guardarProductoEnCarrito(product);
    setCarritoCount((prevCount) => prevCount + 1);
  };

  const mostrarDetalles = (product) => {
    setProductoSeleccionado(product);
  };

  const cerrarDetalles = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className="products-container">
      {productoSeleccionado ? (
        <Detalles producto={productoSeleccionado} onClose={cerrarDetalles} />
      ) : (
        storeItems.map((product, id) => (
          <div className="product-container" key={id}>
            <div>
              <img
                src={product.imgUrl}
                alt=""
                onClick={() => mostrarDetalles(product)}
              />
            </div>
            <div>
              <h2 className="bike">{product.name}</h2>
              <h3 className="price"> {product.price} €</h3>
              <button
                className="add-cart"
                onClick={() => handleAddToCart(product)}
              >
                Añadir al carrito
              </button>
            </div>
            <div>
              <p className="desc-text">{product.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
