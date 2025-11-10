import React, { useState } from 'react';

export default function Login({ onEnter, onGaleria }) {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  function manejarSubmit(e) {
    e.preventDefault();
    if (email && clave) onEnter();
    else alert('Completa email y contraseña');
  }

  return (
    <form onSubmit={manejarSubmit}>
      <h2>Iniciar Sesión</h2>
      <label>Email:</label>
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
      <label>Contraseña:</label>
      <input type='password' value={clave} onChange={e => setClave(e.target.value)} required />
      <div>
        <button type='submit'>Ingresar</button>
        <button type='button' onClick={onGaleria}>Ver Galería sin entrar</button>
      </div>
    </form>
  );
}
