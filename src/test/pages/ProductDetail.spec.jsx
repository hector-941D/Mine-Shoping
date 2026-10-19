import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from '../../pages/ProductDetail';

function renderProductDetail(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes><Route path="/products/:id" element={<ProductDetail />} /></Routes>
    </MemoryRouter>
  );
}

describe('ProductDetail Page', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('renderiza el producto correspondiente al identificador de la ruta', () => {
    renderProductDetail('/products/2');

    expect(screen.getByRole('heading', { name: 'Manzana Dorada Encantada' })).not.toBeNull();
  });

  it('muestra la imagen, descripción y precio del producto', () => {
    renderProductDetail('/products/2');

    expect(screen.getByRole('img', { name: 'Manzana Dorada Encantada' })).not.toBeNull();
    expect(screen.getByText(/otorga efectos de regeneración/i)).not.toBeNull();
    expect(screen.getByText('30 esmeraldas')).not.toBeNull();
  });

  it('muestra un mensaje cuando el producto no existe', () => {
    renderProductDetail('/products/999');

    expect(screen.getByRole('heading', { name: 'Producto no encontrado' })).not.toBeNull();
  });
});