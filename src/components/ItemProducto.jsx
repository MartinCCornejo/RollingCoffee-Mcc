import { Button } from "react-bootstrap";

const ItemProducto = ({producto}) => {
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
              <Button variant="danger" className="ms-2">
                <i className="bi bi-trash"></i>
              </Button>
            </td>
          </tr>
    );
};

export default ItemProducto;