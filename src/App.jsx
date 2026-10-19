import React from 'react';
import './App.css'
import { Text} from './components/atoms/Text'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/NavBar';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<h1>Detalle del Producto</h1>} />
      </Routes>
    </>
  );
}

export default App;