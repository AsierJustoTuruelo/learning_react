import React from 'react';
import storeItems from '../data/products.json';

export const Productos = ({ setCarritoCount }) => {
  const handleAddToCart = () => {
    setCarritoCount(prevCount => prevCount + 1);
  };

  return (
    <div className='products-container'>
      {storeItems.map((product, id) => {
        console.log(product.imgUrl)
        return (
          <div className="product-container" key={id}>
            <div>
              <img src={product.imgUrl} alt=""/>
            </div>
            <div>
              <h2 className='bike'>{product.name}</h2>
              <h3 className='price'> {product.price}$</h3>
              <button className='add-cart' onClick={handleAddToCart}>
                Añadir al carrito
              </button>
            </div>
            <div>
              <p className='desc-text'>{product.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
