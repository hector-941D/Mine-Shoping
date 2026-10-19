import React from 'react';
import { Container } from 'react-bootstrap';
import Text from '../components/atoms/Text';

function Home() {
  return (
    <Container className="text-center my-5">
      <Text variant="h1">Bienvenido a MineShop</Text>
      <Text variant="h4" className="text-muted mt-3">Todo lo necesario para tu supervivencia.</Text>
    </Container>
  );
}

export default Home;