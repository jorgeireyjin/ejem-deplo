import React, { useEffect, useState } from 'react';

const Frutas = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/frutas.json') // Ruta al archivo JSON
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching the JSON:', error));
    }, []);

    return (
        <div>
            <h1>Datos del JSON - Usando Fetch</h1>
            {data ? (
                <div>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                    <ul>
                        {data.map((item) => (
                            <li key={item.name} >
                                {item.name} - {item.color} - {item.price}
                            </li>
                        ))}
                    </ul>
                </div>

            ) : (
                <p>Cargando...</p>
            )}

        </div>
    );
};

export default Frutas;
