import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "../helpers/queries";

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
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-center">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          alt="Imagen del producto"
          className="img-fluid"
          width={130}
        />
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="ms-2" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
