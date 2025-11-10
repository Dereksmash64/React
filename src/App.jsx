import React, { useState } from 'react';
import DisenoCamiseta from './components/DisenoCamiseta';
import GaleriaCamisetas from './components/GaleriaCamisetas';
import Login from './components/Login';

function App() {
  const [view, setView] = useState('login');
  const [camisetas, setCamisetas] = useState([]);

  return (
    <div className='App'>
      {view === 'login' && <Login onEnter={() => setView('diseno')} onGaleria={() => setView('galeria')} />}
      {view === 'diseno' && <DisenoCamiseta onGuardar={(d) => setCamisetas(prev => [d, ...prev])} onVerGaleria={() => setView('galeria')} />}
      {view === 'galeria' && <GaleriaCamisetas camisetas={camisetas} onVolver={() => setView('diseno')} />}
    </div>
  );
}

export default App;
