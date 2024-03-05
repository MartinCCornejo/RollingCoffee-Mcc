import { Container, Row } from "react-bootstrap";
import CardProducto from "./CardProducto";

const Table = ({productos}) => {
  return (
    <Container>
      <h2 className="fs-1 mt-4 mb-3 fw-medium "><span className="text-success display-4 fw-semibold">N</span>uestros Productos</h2>
      <Row>
        {
          productos.map((producto)=> <CardProducto key={producto.id} producto={producto}></CardProducto>)
        }
      </Row>
    </Container>
  );
};

export default Table;
