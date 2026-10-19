import React from 'react';
import { Table, Card } from 'react-bootstrap';
import CartRow from '../molecules/CartRow';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Image from '../atoms/Image';

function CartSummary({ cart, total, onUpdateQuantity, onRemove, onClear, onCheckout }) {
  if (cart.length === 0) {
    return (
      <Card className="p-4 text-center">
        <Text variant="h4">Tu carrito está vacío</Text>
        <Text variant="p" className="text-muted">Añade items para comerciar.</Text>
      </Card>
    );
  }

  return (
    <Card className="p-3 shadow-sm">
      <Table responsive bordered hover align="middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartRow
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
        <Button variant="outline-warning" onClick={onClear}>
          Vaciar Carrito
        </Button>

        <div className="d-flex align-items-center gap-3">
          <Text variant="h4" className="mb-0">
            Total:{' '}
            <span className="text-success fw-bold">
              {total}{' '}
              <Image
                src="https://minecraft.wiki/images/Emerald_JE3_BE3.png"
                alt="Esmeralda"
                width="24"
                height="24"
              />
            </span>
          </Text>
          <Button variant="success" size="lg" onClick={onCheckout}>
            Finalizar Compra
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CartSummary;