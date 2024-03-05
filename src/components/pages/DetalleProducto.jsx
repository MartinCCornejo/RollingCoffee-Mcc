import { Col, Row, Container } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="flex-grow-1 my-5">
      <h1 className="mt-5 pt-4"><span className="text-success display-4 fw-semibold">D</span>etalle del producto</h1>
      <hr className="text-success" />
      <Row className="justify-content-center align-items-center">
        <Col md={5} className="mb-4 mb-md-0">
          <img
            src="https://th.bing.com/th/id/OIP.yahamQvZ7L4Placs0V2upwHaLH?rs=1&pid=ImgDetMain"
            alt="Imagen de la receta"
            className="img-detalle"
          />
        </Col>
        <Col md={5}>
          <h2 className="main-color fw-semibold text-uppercase">Capuchino</h2>
          <hr />
          <p>
            El café americano es una bebida caliente que consiste en un espresso
            diluido con agua caliente, lo que resulta en una taza de café suave
            y aromático. Es una opción popular para aquellos que prefieren un
            café menos intenso que el espresso tradicional. Perfecto para
            disfrutar en cualquier momento del día.
          </p>
          <h3 className="fs-5"><span className="text-success fw-semibold">Categoria</span>: Infusiones</h3>
          <p className="fw-semibold fs-1 text-montserrat">$1000</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
