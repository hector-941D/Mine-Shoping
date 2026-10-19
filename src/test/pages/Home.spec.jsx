import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home Page', () => {
  afterEach(cleanup);

  it('renderiza el título de bienvenida', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'Bienvenido a MineShop', level: 1 })).not.toBeNull();
  });

  it('renderiza el texto secundario de bienvenida', () => {
    render(<Home />);

    expect(screen.getByText('Todo lo necesario para tu supervivencia.')).not.toBeNull();
  });

  it('usa el contenedor y las clases Bootstrap de la página', () => {
    const { container } = render(<Home />);

    expect(container.querySelector('.container.text-center.my-5')).not.toBeNull();
  });
});