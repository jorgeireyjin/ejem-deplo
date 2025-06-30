// ProductList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemList2 = () => {
  const navigate = useNavigate();
  const pokemones = [
    { id: 1, name: 'Pokemon 1', category: 'Fuego' },
    { id: 2, name: 'Pokemon 2', category: 'Agua' },
    { id: 3, name: 'Pokemon 3', category: 'Tierra' },
  ];

  const handlePokemonClick = (id, category) => {
    navigate(`/items/${id}/${category}`); // Navega a la página de detalles del producto
  };

  return (
    <div>
      <h2>Lista de Pokemones 2</h2>
      <ul>
        {pokemones.map((pokemon) => (
          <li 
            key={pokemon.id} 
            onClick={() => handlePokemonClick(pokemon.id, pokemon.category)}
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', margin: '0.5rem 0' }}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList2;
