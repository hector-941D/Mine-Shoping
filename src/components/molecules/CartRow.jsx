import React from 'react';
import Image from '../atoms/Image';
import Button from '../atoms/Button';

function CartRow({ item, onUpdateQuantity, onRemove }) {
    const subtotal = item.precio_esmeraldas * item.cantidad;

    return (
        <tr>
        <td>
            <div className="d-flex align-items-center gap-2">
            <Image src={item.imagen} alt={item.nombre} width="40" height="40" style={{ objectFit: 'contain' }} />
            <span>{item.nombre}</span>
            </div>
        </td>
        <td>
            {item.precio_esmeraldas}{' '}
            <Image
            src="https://minecraft.wiki/images/Emerald_JE3_BE3.png"
            alt="Esmeralda"
            width="16"
            height="16"
            />
        </td>
        <td>
            <div className="d-flex align-items-center gap-2" style={{ maxWidth: '120px' }}>
            <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.cantidad - 1)}>-</Button>
            <span className="fw-bold">{item.cantidad}</span>
            <Button
                variant="outline-secondary"
                size="sm"
                disabled={item.cantidad >= item.stock}
                onClick={() => onUpdateQuantity(item.id, item.cantidad + 1)}>+</Button>
            </div>
        </td>
        <td>
            {subtotal}{' '}
            <Image
            src="https://minecraft.wiki/images/Emerald_JE3_BE3.png"
            alt="Esmeralda"
            width="16"
            height="16"
            />
        </td>
        <td>
            <Button variant="outline-danger" size="sm" onClick={() => onRemove(item.id)}>
            Quitar
            </Button>
        </td>
        </tr>
    );
    }

export default CartRow;