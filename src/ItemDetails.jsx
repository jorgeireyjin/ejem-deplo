// ItemDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { id } = useParams(); // Obtener el parámetro 'id' de la URL

  return (
    <div>
      <h2>Detalles del Pokemon</h2>
      <p>ID recibido: {id}</p>
      {/* Aquí podrías hacer una consulta a una API para obtener más detalles usando el id */}
      bla bla bla
    </div>
  );
};

export default ItemDetails;
