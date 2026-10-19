import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product, 1);
    alert(`¡${product.nombre} añadido al carrito!`);
  };

  return (
    <Card style={{ width: '18rem' }} className="m-2">
      <Image src={product.imagen} alt={product.nombre} className="card-img-top" />
      <Card.Body>
        <CardBody
          title={product.nombre}
          categoria={product.categoria}
          description={product.descripcion}
          price={product.precio_esmeraldas}
        />
        <br />
        <div className="d-flex gap-2 mt-3">
            <Button variant="outline-primary" onClick={() => navigate(`/products/${product.id}`)}>
                Ver detalles
            </Button>
            <Button variant="success" disabled={product.stock === 0} onClick={handleAddToCart}>
              {product.stock === 0 ? 'Sin Stock' : 'Añadir al Carrito'}
            </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;