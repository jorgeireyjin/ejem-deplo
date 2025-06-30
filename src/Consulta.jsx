import React, { useState, useEffect } from 'react';

function ConsultaEjemplo() {
    // Guardar valor ingresado en el form
    const [inputValue, setInputValue] = useState('');
    // INvocacion a la API
    const [query, setQuery] = useState('');
    // Guardar resultados de la API
    const [result, setResult] = useState(null);
    // Manejar  loading y errors
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Effect ocurre cuando cambia query
    useEffect(
        () => {
            // Si query es vacio
            if (!query) return; 

            setLoading(true);
            setError(null);

            // Invocar a la API
            fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('OCurrio un error en la comunicacion.');
                    }
                    return response.json();
                })
                .then( (data) => {
                    setResult(data);
                    console.log(data);
                    setLoading(false);
                })
                .catch( (err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }, [query] );

    // Manejar el Submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene la navegación a la URL del enlace
        setQuery(inputValue.trim());
    };

    return (
        <div style={{ maxWidth: '30%', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
            <h2>Consulta de API / useEffect / Forms con React</h2>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Ingresa un ID de Pokemon"
                    value={inputValue}
                    onChange={ (e) => setInputValue(e.target.value) }
                    required
                />
                <button type="submit"
                          style={{
                            padding: '0 1rem',
                            backgroundColor: '#007bff',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            borderRadius: '4px'
                          }}>
                    Consultar
                </button>
            </form>

            <div>
                {loading && <p style={{ color: '#007bff' }}> Cargando... </p>}
                {error   && <p style={{ color: 'red' }}> Error: {error}  </p>}
                {result && !loading && !error && (
                    <div style={{ color: 'darkgreen' }}>
                        <p>Nombre : <strong style={ {fontSize: '32px'}}>{result.name}</strong>:</p>
                        <img
                            src={result.sprites.front_default}
                            alt={result.name} />
                        <p>Habilidades:</p>
                        <ul>
                            {result.abilities.map((obj,i) => (
                                <li key={i}>{obj.ability.name} </li>
                            ))}
                        </ul>
                    </div>

                )}
            </div>
        </div>
    );
}

export default ConsultaEjemplo;

