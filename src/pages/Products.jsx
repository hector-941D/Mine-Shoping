import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getItems } from '../data/Products'; // Ajusta la ruta si tu Products.js está en otra carpeta
import ProductCard from '../components/organisms/ProductCard'; // Ajusta la ruta a tu ProductCard
import Text from '../components/atoms/Text';

function Products() {
  const products = getItems();

  return (
    <Container className="my-4">
      <Text variant="h2" className="mb-4 text-center">Catálogo de Productos</Text>
      <Row>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default Products;