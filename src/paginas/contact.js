import React, { useState } from 'react';

export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // a un servidor, realizar una solicitud HTTP, enviar un correo electrónico, etc.

    // Ejemplo de salida en la consola
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    // Luego de enviar los datos, puedes realizar alguna acción adicional,
    // como mostrar una notificación, redireccionar a otra página, etc.

    // Limpiar el formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        <button className="send-form" type="submit">Enviar</button>
      </form>
    </div>
  );
};
