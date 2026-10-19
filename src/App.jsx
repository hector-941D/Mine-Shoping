import React from 'react';
import './App.css'
import { Text} from './components/atoms/Text'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/NavBar';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<Admin />} /> {/* <-- Nueva Ruta */}
      </Routes>
    </>
  );
}

export default App;