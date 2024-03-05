import { Col, Card, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const CardProducto = ({producto}) => {
  return (
    <Col lg={3} md={4} sm={6} className="mb-4">
      <Card className="h-100">
        <div className="card-img-container">
          <Card.Img variant="top" src={producto.imagen} className="img-card-customized" />
        </div>
        <Card.Body className="pb-0 d-flex flex-column justify-content-between">
          <h2 className="main-color fs-5 fw-semibold">{producto.nombreProducto}</h2>
          <p>{producto.descripcionBreve}</p>
          <h3 className="fw-bold fs-3">${producto.precio}</h3>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <Button variant="outline-success border-radius-50">
            <i className="bi bi-heart-fill"></i>
          </Button>
          <NavLink end to={'/detalle-producto'}>
            <Button variant="success" className="text-montserrat fw-semibold">
              Ver más
            </Button>
          </NavLink>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
