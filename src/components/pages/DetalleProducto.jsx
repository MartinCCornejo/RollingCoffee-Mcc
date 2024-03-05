import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";

const DetalleProducto = () => {
  const {id} = useParams();
  const [producto,setProducto] = useState([]);

  useEffect(()=>{
    cargarDatosProducto();
  },[])

  const cargarDatosProducto = async () => {
    const respuesta = await obtenerProductoAPI(id);
    const datos = await respuesta.json();
    setProducto(datos);
  };


  return (
    <Container className="flex-grow-1 my-5">
      <h1 className="mt-5 pt-4"><span className="text-success display-4 fw-semibold">D</span>etalle del producto</h1>
      <hr className="text-success" />
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={6} className="mb-4 mb-md-0">
          <img
            src={producto.imagen}
            alt="Imagen del producto"
            className="img-detalle"
          />
        </Col>
        <Col md={6} lg={6}>
          <h2 className="main-color fw-semibold text-uppercase">{producto.nombreProducto}</h2>
          <hr />
          <p>{producto.descripcionAmplia}</p>
          <h3 className="fs-5"><span className="text-success fw-semibold">Categoria</span>: {producto.categoria}</h3>
          <p className="fw-semibold display-4 text-montserrat mt-4">${producto.precio}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
