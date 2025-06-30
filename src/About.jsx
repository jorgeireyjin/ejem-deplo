import React from 'react';

import './About.css';

// Crear un array con números del 1 al 12
const numeros = Array.from({ length: 9 }, (_, i) => i + 1);

const About = () => {
    return (
        <section>
            <h2>Nosotros</h2>
            <p>
                Pokémon es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial.
            </p>

            <ul>
                {numeros.map((num) => (
                    <li key={num}>
                        <img src={`/images/00${num}.png`} />
                    </li>
                ))}
            </ul>

        </section>
    );
}

export default About;
