import { Link } from "react-router-dom";
import error404 from "../../assets/error404.png";
import { Button, Container } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container className="my-5 pt-5 text-center flex-grow-1">
      <img src={error404} alt="Imagen del error 404" className="img-fluid" />
      <Link to={"/"} className="d-block m-auto">
        <Button variant="success" >Volver al inicio</Button>
      </Link>
    </Container>
  );
};

export default Error404;
