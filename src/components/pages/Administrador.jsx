import { Button, Container, Table } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Administrador = () => {
  return (
    <Container className="flex-grow-1 my-5">
      <div className="mt-5 d-flex justify-content-between align-items-center mb-3">
        <h1 className="pt-4"><span className="text-success display-4 fw-semibold">P</span>roductos disponibles</h1>
        <div className="pt-5">
          <NavLink end to={'/agregar-producto'}>
          <Button variant="primary">
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
          </NavLink>
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
          <tr>
            <td className="text-center">1</td>
            <td>Café Americano</td>
            <td className="text-center">$250</td>
            <td className="text-center">
                <img src="https://th.bing.com/th/id/R.793127db17ef0bf7cbf42d8ff997caa6?rik=xJh8aaQrJwkMDg&pid=ImgRaw&r=0" alt="Imagen del producto" className="img-fluid" width={130}/>
            </td>
            <td>Bebida caliente</td>
            <td className="text-center">
                <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                <Button variant="danger" className="ms-2"><i className="bi bi-trash"></i></Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td>Capuchino</td>
            <td className="text-center">$350</td>
            <td className="text-center">
                <img src="https://th.bing.com/th/id/OIP.yahamQvZ7L4Placs0V2upwHaLH?rs=1&pid=ImgDetMain" alt="Imagen del producto" className="img-fluid" width={130}/>
            </td>
            <td>Bebida caliente</td>
            <td className="text-center">
                <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                <Button variant="danger" className="ms-2"><i className="bi bi-trash"></i></Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td>Croissant de chocolate</td>
            <td className="text-center">$180</td>
            <td className="text-center">
                <img src="https://th.bing.com/th/id/R.827b004d033c65a7d7785b2f336d202a?rik=g8RnwupcgbLTBw&pid=ImgRaw&r=0" alt="Imagen del producto" className="img-fluid" width={130}/>
            </td>
            <td>Bebida caliente</td>
            <td className="text-center">
                <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                <Button variant="danger" className="ms-2"><i className="bi bi-trash"></i></Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">4</td>
            <td>Té verde</td>
            <td className="text-center">$200</td>
            <td className="text-center">
                <img src="https://www.superalimentos.pro/wp-content/uploads/2017/07/te-verde-propiedades.jpg?_t=1499270211" alt="Imagen del producto" className="img-fluid" width={130}/>
            </td>
            <td>Bebida caliente</td>
            <td className="text-center">
                <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                <Button variant="danger" className="ms-2"><i className="bi bi-trash"></i></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
