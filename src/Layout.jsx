// src/Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './index.css'

const Layout = () => {
  return (
    <>

      <div id="contenedor">

        <header id="main-header">
          <img src="/images/logo_nuevo.png" width="150" height="60" />
          <h2>Carrera de Ingenieria de Sistemas <em>- Programacion Web 652</em></h2>
          <hr />
          <nav>
            <ul>
              <li><Link to="/" >Inicio</Link></li>
              <li><Link to="/lista" >Lista 1</Link></li>
              <li><Link to="/lista2" >Lista 2</Link></li>
              <li><Link to="/consulta" >Consulta</Link></li>
              <li><Link to="/about" >Acerca de</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/frutas">Frutas</Link></li>
              <li><Link to="/frutas2">Frutas 2</Link></li>
              <li><Link to="/storage">Storage</Link></li>
              <li><Link to="/cookie">Cookie</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          {/* Aquí React Router renderiza el componente según la ruta */}
          <Outlet />
        </main>

      </div> {/* del contenedor --*/}
      <footer>
        <p> &copy; 2025 Programacion Web  2025-1</p>
      </footer>
    </>
  );
};

export default Layout;