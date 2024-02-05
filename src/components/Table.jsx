import { Container, Row } from "react-bootstrap";
import CardProducto from "./CardProducto";

const Table = () => {
  return (
    <Container>
      <h1 className="fs-1 mt-5 mb-4 fw-medium ">Nuestros Productos</h1>
      <Row>
        <CardProducto
        titulo={'Café Americano'}
        descripcion={'Una taza de café suave y aromático'}
        precio={'$250'}
          image={
            "https://th.bing.com/th/id/R.793127db17ef0bf7cbf42d8ff997caa6?rik=xJh8aaQrJwkMDg&pid=ImgRaw&r=0"
          }
        ></CardProducto>
        <CardProducto
        titulo={'Capuchino'}
        descripcion={'Espuma de leche cremosa sobre un expresso fuerte'}
        precio={'$350'}
          image={
            "https://th.bing.com/th/id/OIP.yahamQvZ7L4Placs0V2upwHaLH?rs=1&pid=ImgDetMain"
          }
        ></CardProducto>
        <CardProducto
        titulo={'Croissant de Chocolate'}
        descripcion={'Delicioso croissant relleno de suave chocolate'}
        precio={'$180'}
          image={
            "https://th.bing.com/th/id/R.827b004d033c65a7d7785b2f336d202a?rik=g8RnwupcgbLTBw&pid=ImgRaw&r=0"
          }
        ></CardProducto>
        <CardProducto
        titulo={'Té verde'}
        descripcion={'Té verde orgánico con un sabor suave y revitalizante'}
        precio={'$250'}
          image={
            "https://www.superalimentos.pro/wp-content/uploads/2017/07/te-verde-propiedades.jpg?_t=1499270211"
          }
        ></CardProducto>
      </Row>
    </Container>
  );
};

export default Table;
