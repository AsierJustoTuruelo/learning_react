import React, { useState } from 'react';
import products from '../data/cubiertas_montana.json';
import { Detalles } from './detalles';


export const CubiertasMontana = ({ setCarritoCount }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const guardarProductoEnCarrito = (producto) => {
    const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
    cartItems.push(producto);
    console.log(producto);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Producto agregado al carrito y guardado en localStorage');
  };

  const handleAddToCart = (product) => {
    console.log(product.image)
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
    <div className='container-cub-mon'>
      <h1 className='title-cub-mon'>Cubiertas de montaña</h1>
      <div className='content-cub-mon'>
        {products.map((product, index) => (
          <div key={index} className='product'>
            <h2 className='product-name'>{product.name}</h2>
            <img src={product.image} alt="" className='product-image' />
            <p className='product-price'>{product.price} €</p>
            <button
              className='add-cart'
              onClick={() => handleAddToCart(product)}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
      {productoSeleccionado && (
        <Detalles producto={productoSeleccionado} onClose={cerrarDetalles} />
      )}
    </div>
  );
};
