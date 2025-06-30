import React, { useState, useEffect } from 'react';

// Funciones simples para manejar cookies

/*
Parámetros
name: Es el nombre de la cookie que se va a establecer. 
value: Es el valor que se asignará a la cookie. 
Se utiliza encodeURIComponent para asegurarse de que el valor se codifique correctamente, 
para evitar problemas con caracteres especiales.
days: Es un número que indica cuántos días debe ser válida la cookie. 
Si se proporciona, se calculará la fecha de expiración de la cookie.

Funcionamiento
Cálculo de la fecha de expiración: Si se proporciona el parámetro days, se crea un nuevo objeto Date 
y se establece su tiempo sumando el número de días especificado (convertido a milisegundos). 
Esto se hace multiplicando days por 24 (horas), 60 (minutos), 60 (segundos) y 1000 (milisegundos).
Luego, se convierte la fecha a una cadena en formato UTC utilizando toUTCString().

*/
const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  /* Creación de la cookie:
  La cadena que se asigna a document.cookie incluye:
  El nombre de la cookie y su valor, separados por un signo igual (=).
  La fecha de expiración (si se ha especificado).
  La ruta (path=/), que indica que la cookie es accesible en toda la aplicación.
  */
  document.cookie = name + '=' + encodeURIComponent(value || '') + expires + '; path=/';
};

const getCookie = (name) => {
  const nameEQ = name + '=';
  /*
  document.cookie contiene todas las cookies en forma de una cadena. 
  Esta cadena se divide en un array de cookies individuales utilizando split(';'). 
  Cada cookie en este array está separada por un punto y coma.
  */
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    /* Se eliminan los espacios en blanco al principio de la cadena */
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    /* 
    Si se encuentra la cookie, se devuelve su valor. 
    Esto se hace utilizando substring para extraer la parte de la cadena que sigue al signo igual
     y decodeURIComponent para decodificar el valor, asegurando que se manejen correctamente los caracteres especiales.
    */
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  /* Si no se encuentra la cookie */
  return null;
};

/*
Para eliminar una cookie, se establece una nueva cookie con el mismo nombre (name) pero con un valor vacío (''). 
Esto es necesario porque las cookies se identifican por su nombre.
Establecimiento de la fecha de expiración:
Se utiliza Max-Age=-99999999 para indicar que la cookie debe expirar inmediatamente. 
Max-Age es un atributo que define la duración de la cookie en segundos. 
Al establecer un valor negativo, se indica que la cookie debe ser eliminada.
*/
const eraseCookie = (name) => {
  document.cookie = name + '=; Max-Age=-99999999;';
};

const SessionCookieFormExample = () => {
  const [inputName, setInputName] = useState('');
  const [savedUser, setsavedUser] = useState(() => {
    return sessionStorage.getItem('usuario') || '';
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (savedUser) {
      sessionStorage.setItem('usuario', savedUser);
      setCookie('usuario', savedUser, 2);
    } else {
      sessionStorage.removeItem('usuario');
      //eraseCookie('usuario');
    }
  }, [savedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim() === '') {
      setMessage('Por favor, escribe un usuario válido.');
      return;
    }
    setsavedUser(inputName.trim());
    setInputName('');
    setMessage('Usuario guardado en sesión y cookie.');
  };

  const loadFromCookie = () => {
    const cookieUser = getCookie('usuario');
    console.log(cookieUser);
    if (cookieUser) {
      setsavedUser(cookieUser);
      setMessage('Usuario cargado desde cookie.');
    } else {
      setMessage('No hay usuario guardado en cookies.');
    }
  };

  const logout = () => {
    setsavedUser('');
    setMessage('Sesión cerrada.');
  };

  const baseButtonStyle = {
    minWidth: '100px',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'background-color 0.3s, border-color 0.3s',
  };

  /*
  Los 3 puntos representan el operador spread de JavaScript, 
  que se utiliza para copiar las propiedades de un objeto dentro de otro objeto.
  */
  const blueButtonStyle = {
    ...baseButtonStyle,
    border: '1px solid #007bff',
    backgroundColor: '#007bff',
    color: 'white',
  };

  const blueButtonHoverStyle = {
    backgroundColor: '#0056b3',
    borderColor: '#0056b3',
  };

  const redButtonStyle = {
    ...baseButtonStyle,
    border: '1px solid #dc3545',
    backgroundColor: '#dc3545',
    color: 'white',
  };

  const redButtonHoverStyle = {
    backgroundColor: '#a71d2a',
    borderColor: '#a71d2a',
  };

  const buttonContainerStyle = {
    display: 'flex',
    marginTop: '15px',
    gap: '10px',
  };

  const [hoveredBtn, setHoveredBtn] = useState(null);

  const RenderButton = ({ children, onClick, type = 'button', color = 'blue', name }) => {
    const isBlue = color === 'blue';
    const baseStyle = isBlue ? blueButtonStyle : redButtonStyle;
    const hoverStyle = isBlue ? blueButtonHoverStyle : redButtonHoverStyle;
    return (
      <button
        type={type}
        onClick={onClick}
        style={{
          ...baseStyle,
          ...(hoveredBtn === name ? hoverStyle : {}),
        }}
        onMouseEnter={() => setHoveredBtn(name)}
        onMouseLeave={() => setHoveredBtn(null)}
      >
        {children}
      </button>
    );
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '450px' }}>
      <h2> Sesiones y Cookies</h2>
      {savedUser ? (
        <div>
          <p> Hola, <strong>{savedUser}</strong>!!!!!   </p>

          <div style={buttonContainerStyle}>
            <RenderButton onClick={logout} name="logout" color="red">
              Cerrar sesión
            </RenderButton>
            <RenderButton onClick={loadFromCookie} name="loadCookie" color="blue">
              Cargar sesión desde cookie
            </RenderButton>
          </div>

        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Escribe tu nombre completo"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            style={{
              padding: '8px',
              fontSize: '14px',
              width: '100%',
              boxSizing: 'border-box',
              marginBottom: '10px',
            }}
          />
          <div style={buttonContainerStyle}>
            <RenderButton type="submit" name="save" color="blue">
              Guardar
            </RenderButton>
            <RenderButton onClick={loadFromCookie} name="loadCookie" color="blue">
              Cargar sesión
            </RenderButton>
          </div>
          <p>Escribe tu usuario y pulsa "Guardar" para almacenarlo.</p>
        </form>
      )}
      {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default SessionCookieFormExample;
