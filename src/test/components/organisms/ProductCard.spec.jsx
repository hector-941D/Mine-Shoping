import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductCard from '../../../components/organisms/ProductCard';

const product = {
  id: 2,
  nombre: 'Manzana Dorada',
  categoria: 'Consumibles',
  descripcion: 'Recupera salud',
  precio_esmeraldas: 30,
  imagen: '/images/apple.png',
};

describe('ProductCard Component (Organismo)', () => {
  afterEach(cleanup);

  it('renderiza el nombre y la categoría del producto', () => {
    render(<MemoryRouter><ProductCard product={product} /></MemoryRouter>);

    expect(screen.getByRole('heading', { name: 'Manzana Dorada' })).not.toBeNull();
    expect(screen.getByText('Consumibles')).not.toBeNull();
    expect(screen.getByRole('img', { name: 'Manzana Dorada' }).getAttribute('src')).toBe('/images/apple.png');
    expect(screen.getByText('Recupera salud')).not.toBeNull();
    expect(screen.getByText('$30')).not.toBeNull();
  });

  it('navega al detalle del producto al pulsar el botón', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
        <Routes><Route path="/products/:id" element={<p>Detalle cargado</p>} /></Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Ver detalles' }));

    expect(screen.getByText('Detalle cargado')).not.toBeNull();
  });
});