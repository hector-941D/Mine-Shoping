import React from 'react';
import './App.css'
import { Text} from './components/atoms/Text'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/NavBar';
import { button } from 'rect-bootstrap';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<h1>Detalle del Producto</h1>} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;