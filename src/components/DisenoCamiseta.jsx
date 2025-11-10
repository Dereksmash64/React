import React, { useState } from 'react';

export default function DisenoCamiseta({ onGuardar, onVerGaleria }) {
  const [colorTorso, setColorTorso] = useState('#ff0000');
  const [colorMangaIzq, setColorMangaIzq] = useState('#ff0000');
  const [colorMangaDer, setColorMangaDer] = useState('#ff0000');

  function guardar() {
    const diseño = {
      id: Date.now().toString(),
      torsoColor: colorTorso,
      mangaIzqColor: colorMangaIzq,
      mangaDerColor: colorMangaDer,
      calificacion: 0
    };
    onGuardar(diseño);
    alert('Diseño guardado');
  }

  return (
    <div>
      <h2>Diseñador de Camisetas</h2>

      <div>
        <label>Color torso:</label>
        <input type='color' value={colorTorso} onChange={e => setColorTorso(e.target.value)} />
      </div>

      <div>
        <label>Color manga izq:</label>
        <input type='color' value={colorMangaIzq} onChange={e => setColorMangaIzq(e.target.value)} />
      </div>

      <div>
        <label>Color manga der:</label>
        <input type='color' value={colorMangaDer} onChange={e => setColorMangaDer(e.target.value)} />
      </div>

      <div style={{ margin: '15px 0' }}>
        <svg width='200' viewBox='0 0 26 14' xmlns='http://www.w3.org/2000/svg'>
          <path d='M4 2 L8 2 L10 4 L16 4 L18 2 L22 2 L22 10 L4 10 Z' fill={colorTorso} />
          <path d='M2 2 L4 2 L4 10 L2 10 Z' fill={colorMangaIzq} />
          <path d='M22 2 L24 2 L24 10 L22 10 Z' fill={colorMangaDer} />
        </svg>
      </div>

      <button onClick={guardar}>Guardar Diseño</button>
      <button onClick={onVerGaleria}>Ver Galería</button>
    </div>
  );
}
