import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { id, category } = useParams(); // Obtiene el ID y la categoría del producto de la URL
  return (
    <div>
      <h2>Detalles del Pokemon</h2>
      <p>ID : {id}</p>
      <p>Categoría : {category}</p>
      {/* Aquí podrías hacer una consulta a una API para obtener más detalles del producto */}
    </div>
  );
};
export default PokemonDetails;