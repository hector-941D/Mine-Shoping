import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { getCart, updateQuantity, removeFromCart, clearCart, getCartTotal } from '../data/Cart';
import CartSummary from '../components/organisms/CartSummary';
import Text from '../components/atoms/Text';

function CartPage() {
  const [cart, setCart] = useState(getCart());
  const total = getCartTotal();

  const handleUpdateQuantity = (id, quantity) => {
    const updated = updateQuantity(id, quantity);
    setCart(updated);
  };

  const handleRemove = (id) => {
    const updated = removeFromCart(id);
    setCart(updated);
  };

  const handleClear = () => {
    const updated = clearCart();
    setCart(updated);
  };

  const handleCheckout = () => {
    alert('¡Intercambio realizado con éxito! Las esmeraldas se han descontado.');
    handleClear();
  };

  return (
    <Container className="my-5">
      <Text variant="h2" className="mb-4">Carrito de Compras</Text>
      <CartSummary
        cart={cart}
        total={total}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
        onClear={handleClear}
        onCheckout={handleCheckout}
      />
    </Container>
  );
}

export default CartPage;