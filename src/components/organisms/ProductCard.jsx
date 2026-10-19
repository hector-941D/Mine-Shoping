import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card className="m-2 minecraft-product-card">
      <Image src={product.imagen} alt={product.nombre} className="card-img-top" />
      <Card.Body>
        <CardBody
          title={product.nombre}
          categoria={product.categoria}
          description={product.descripcion}
          price={product.precio_esmeraldas}
        />
        <br />
        <Button variant="primary" onClick={() => navigate(`/products/${product.id}`)}>
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;