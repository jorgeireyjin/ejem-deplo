import React from 'react';
import data from './assets/frutas2.json'; // Importa el archivo JSON

const Frutas2 = () => {
  return (
    <div>
      <h1>Datos del JSON - Usando IMport</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Frutas2;
