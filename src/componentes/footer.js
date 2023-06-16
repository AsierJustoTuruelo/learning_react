import React from 'react';
import '../index.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Enlaces útiles</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li><a href="/servicios">Nuestros servicios</a></li>
            <li><a href="/soporte">Soporte</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes sociales</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Fussion Bike</p>
      </div>
    </footer>
  );
};
