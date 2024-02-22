import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import ItemProducto from "../ItemProducto";

const Administrador = () => {
  const [ productos, setProductos ] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  async function obtenerProductos () {
    const respuesta = await leerProductosAPI();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setProductos(datos);
      } else {
        Swal.fire({
          title: "Ocurrio un error!",
          text: `Intente esta operación en unos minutos`,
          icon: "error"
        });
      }
  }

  return (
    <Container className="flex-grow-1 my-5">
      <div className="mt-5 d-flex justify-content-between align-items-center mb-3">
        <h1 className="pt-4">
          <span className="text-success display-4 fw-semibold">P</span>roductos
          disponibles
        </h1>
        <div className="pt-5">
          <Link to={"/administrador/agregar-producto"}>
            <Button variant="primary">
              <i className="bi bi-file-earmark-plus"></i>
            </Button>
          </Link>
        </div>
      </div>
      <Table striped bordered hover>
        <thead className="text-center text-uppercase">
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de la imagen</th>
            <th>Categoría</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody className="fw-semibold">
        {
          productos.map((producto) => <ItemProducto key={producto.id} producto={producto} setProductos={setProductos}></ItemProducto>)
        }
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
