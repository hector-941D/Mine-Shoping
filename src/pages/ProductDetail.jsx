import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getItemById } from '../data/Products.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';

function ProductDetail() {
  const { id } = useParams();
  const product = getItemById(id);

  if (!product) {
    return (
      <Container className="my-5">
        <h1>Producto no encontrado</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card>
        <Image src={product.imagen} alt={product.nombre} className="card-img-top" />
        <Card.Body>
          <Text variant="h2">{product.nombre}</Text>
          <Text variant="p">{product.descripcion}</Text>
          <Text variant="h4">{product.precio_esmeraldas} Esmeraldas</Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetail;