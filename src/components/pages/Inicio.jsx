import { useState, useEffect } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import Table from "../Table";
import { Col, Container, Row } from "react-bootstrap";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  async function obtenerProductos() {
    const respuesta = await leerProductosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    } else {
      Swal.fire({
        title: "Ocurrio un error!",
        text: `Intente esta operación en unos minutos`,
        icon: "error",
      });
    }
  }

  return (
    <section className="flex-grow-1">
      {/* Aqui va el main de index  */}
      <div className="banner">
        <Container>
          <Row className="justify-content-center justify-content-lg-end">
            <Col lg={6}>
              <h1 className="display-4">
                ¡<span className="display-1 text-success fw-semibold">B</span>
                ienvenido a Rolling Coffee: Donde Cada Sorbo Es Una Aventura!
              </h1>
              <p className="lead">
                Sumérgete en el mundo del café con Rolling Coffee, un lugar
                donde cada taza te lleva a un viaje de sabores, texturas y
                experiencias inolvidables.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Table productos={productos}></Table>
    </section>
  );
};

export default Inicio;
