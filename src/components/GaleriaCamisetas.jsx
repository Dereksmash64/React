import React from 'react';

export default function GaleriaCamisetas({ camisetas = [], onVolver }) {
  if (camisetas.length === 0) {
    return (
      <div>
        <h2>Galería de Camisetas</h2>
        <p>No hay diseños todavía.</p>
        <button onClick={onVolver}>Volver a Diseñar</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Galería de Camisetas</h2>
      <div className='galeria-contenedor'>
        {camisetas.map(c => (
          <div key={c.id} className='tarjeta-camiseta'>
            <svg width='100' viewBox='0 0 26 14' xmlns='http://www.w3.org/2000/svg'>
              <path d='M4 2 L8 2 L10 4 L16 4 L18 2 L22 2 L22 10 L4 10 Z' fill={c.torsoColor} />
              <path d='M2 2 L4 2 L4 10 L2 10 Z' fill={c.mangaIzqColor} />
              <path d='M22 2 L24 2 L24 10 L22 10 Z' fill={c.mangaDerColor} />
            </svg>
            <p><b>Diseño #{c.id.slice(-4)}</b></p>
            <p>Calificación: {c.calificacion}</p>
            <button onClick={() => alert('Me gusta!')}>?? Me gusta</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={onVolver}>Volver a Diseñar</button>
      </div>
    </div>
  );
}
