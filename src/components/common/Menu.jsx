import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/Coffee_Logo.png'

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo de RollingCOffee" className="img-fluid" width={170}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Administrador</Nav.Link>
            <Nav.Link href="#home">Registro</Nav.Link>
            <Nav.Link href="#link">Iniciar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;