import { Col, Card, Button } from "react-bootstrap";

const CardProducto = ({ image, titulo, descripcion, precio }) => {
  return (
    <Col lg={4} md={6} className="mb-4">
      <Card className="card-customized h-100">
        <div className="card-img-container">
        <Card.Img variant="top" src={image} className="img-card-customized" />
        </div>
        <Card.Body className="pb-1 d-flex flex-column justify-content-between">
          <h2 className="main-color fs-5 fw-semibold">{titulo}</h2>
          <p className="fw-medium">{descripcion}</p>
          <h3 className="fw-bold fs-3">{precio}</h3>
        </Card.Body>
        <Card.Footer>
          <Button variant="success">Ver más</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
