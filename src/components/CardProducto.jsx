import { Col, Card, Button } from "react-bootstrap";

const CardProducto = ({ image, titulo, descripcion, precio }) => {
  return (
    <Col lg={3} md={4} sm={6} className="mb-4">
      <Card className="h-100">
        <div className="card-img-container">
        <Card.Img variant="top" src={image} className="img-card-customized" />
        </div>
        <Card.Body className="pb-0 d-flex flex-column justify-content-between">
          <h2 className="main-color fs-5 fw-semibold">{titulo}</h2>
          <p>{descripcion}</p>
          <h3 className="fw-bold fs-3">{precio}</h3>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <Button variant="outline-success border-radius-50"><i className="bi bi-heart-fill"></i></Button>
          <Button variant="success" className="text-montserrat fw-semibold">Ver más</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
