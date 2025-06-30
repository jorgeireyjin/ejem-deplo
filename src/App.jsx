// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Consulta from './Consulta';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import ItemList2 from './ItemList2';
import ItemDetails2 from './ItemDetails2';
import Frutas from './Frutas';
import Frutas2 from './Frutas2';
import StorageExample from './Storage';
import CookieExample from './Cookies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout/> }>
            {/* Rutas hijas que se renderizan dentro de Layout's Outlet */}
            <Route index element={ <Home/> } />       {/* Index es la ruta "/" */}
            <Route path="/lista" element={<ItemList />} />
            <Route path="/items/:id" element={<ItemDetails />} />
            <Route path="/lista2" element={<ItemList2 />} />
            <Route path="/items/:id/:category" element={<ItemDetails2 />} />
            <Route path="consulta" element={ <Consulta /> } />
            <Route path="about" element={ <About /> } />
            <Route path="contact" element={ <Contact/> } />
            <Route path="/frutas" element={ <Frutas/> } />
            <Route path="/frutas2" element={ <Frutas2/> } />
            <Route path="/storage" element={ <StorageExample/> } />
            <Route path="/cookie" element={ <CookieExample/> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
