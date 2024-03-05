import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "../helpers/queries";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto,setProductos }) => {

  const borrarProducto = () => {
    Swal.fire({
      title: "Estas seguro de borrar este producto?",
      text: "No podras revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProductoAPI(producto.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto '${producto.nombreProducto}' fue eliminado correctamente`,
            icon: "success",
          });
          if (respuesta.status === 200) {
            const respuesta = await leerProductosAPI();
            const datos = await respuesta.json();
            setProductos(datos)
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto '${producto.nombreProducto}' NO fue eliminado, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center overflow-hidden text-truncate">{producto.id}</td>
      <td className="overflow-hidden text-truncate">{producto.nombreProducto}</td>
      <td className="text-center overflow-hidden text-truncate">${producto.precio}</td>
      <td className="text-center overflow-hidden text-truncate">
        <img
          src={producto.imagen}
          alt="Imagen del producto"
          className="img-fluid"
          width={130}
        />
      </td>
      <td className="overflow-hidden text-truncate">{producto.categoria}</td>
      <td className="text-center overflow-hidden text-truncate">
        <Link className="btn btn-warning" to={"/administrador/editar-producto/"+producto.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="ms-2" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
