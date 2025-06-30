// ItemList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  
  const navigate = useNavigate();
  const items = [
    { id: 1, name: 'Pokemon 1' },
    { id: 2, name: 'Pokemon 2' },
    { id: 3, name: 'Pokemon 3' },
  ];

  const handleItemClick = (id) => {
    navigate(`/items/${id}`); // Navega a la página de detalles del elemento
  };

  return (
    <div>
      <h2>Lista de Pokemones</h2>
      <ul>
        {items.map((item) => (
          <li 
            key={item.id} 
            onClick={() => handleItemClick(item.id)}
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', margin: '0.5rem 0' }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
