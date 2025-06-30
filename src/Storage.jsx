import React, { useState, useEffect } from 'react';

const StorageExample = () => {
  // Estado para localStorage
  const [localCount, setLocalCount] = useState(() => {
    // Obtener el valor guardado en localStorage o iniciar en 0
    const saved = localStorage.getItem('localCount');
    return saved !== null ? Number(saved) : 0;
  });

  // Estado para sessionStorage
  const [sessionCount, setSessionCount] = useState(() => {
    // Obtener el valor guardado en sessionStorage o iniciar en 0
    const saved = sessionStorage.getItem('sessionCount');
    return saved !== null ? Number(saved) : 0;
  });

  // Guardar el localCount en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('localCount', localCount);
  }, [localCount]);

  // Guardar el sessionCount en sessionStorage cada vez que cambie
  useEffect(() => {
    sessionStorage.setItem('sessionCount', sessionCount);
  }, [sessionCount]);

  // Estilos para los botones en fila y menos ancho
  const buttonStyle = {
    minWidth: '80px',
    padding: '8px 12px',
    marginRight: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #007bff',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '14px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px' }}>
      <h2>Ejemplo de localStorage y sessionStorage</h2>
      <div style={{ marginBottom: '30px' }}>
        <h3>localStorage (persiste incluso al cerrar el navegador):</h3>
        <p>Valor: {localCount}</p>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => setLocalCount(localCount + 1)}>Incrementar</button>
          <button style={buttonStyle} onClick={() => setLocalCount(0)}>Resetear</button>
        </div>
      </div>

      <div>
        <h3>sessionStorage (persiste solo durante la sesión):</h3>
        <p>Valor: {sessionCount}</p>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => setSessionCount(sessionCount + 1)}>Incrementar</button>
          <button style={buttonStyle} onClick={() => setSessionCount(0)}>Resetear</button>
        </div>
      </div>
    </div>
  );
};

export default StorageExample;

