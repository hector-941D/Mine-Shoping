import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button Component (Átomo)', () => {
  afterEach(() => {
    cleanup();
  });

  // PRUEBA 1: Renderizado correcto en el DOM
  it('1. Debe renderizarse correctamente en el DOM con el contenido hijo (children)', () => {
    render(<Button>Comprar con Esmeraldas</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /comprar con esmeraldas/i });

    expect(buttonElement).not.toBeNull();
    expect(buttonElement.textContent).toBe('Comprar con Esmeraldas');
  });

  // PRUEBA 2: Manejo de Props
  it('2. Debe transmitir props de react-bootstrap como variant y disabled', () => {
    render(
      <Button variant="danger" disabled={true}>
        Agotado
      </Button>
    );

    const buttonElement = screen.getByRole('button', { name: /agotado/i });

    expect(buttonElement.disabled).toBeTrue();
    expect(buttonElement.classList.contains('btn-danger')).toBeTrue();
  });

  // PRUEBA 3: Simulación de Eventos / Interacción
  it('3. Debe ejecutar la función onClick pasada como prop al hacer clic', () => {
    const handleClickSpy = jasmine.createSpy('onClickSpy');
    render(<Button onClick={handleClickSpy}>Agregar al Carrito</Button>);

    const buttonElement = screen.getByRole('button', { name: /agregar al carrito/i });
    fireEvent.click(buttonElement);

    expect(handleClickSpy).toHaveBeenCalled();
    expect(handleClickSpy.calls.count()).toBe(1);
  });
});