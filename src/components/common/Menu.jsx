import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Coffee_Logo.png";

const Menu = ({ usuarioLogueado, setUsuarioLogeado }) => {
  const [scrolled, setScrolled] = useState(false);

  const navegacion = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logout = () => {
    sessionStorage.removeItem('loginRollingCoffee');
    setUsuarioLogeado('');
    navegacion('/');
  }

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary navbar ${scrolled ? "box-shadow" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src={logo}
            alt="Logo de RollingCOffee"
            className="img-fluid"
            width={160}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium text-montserrat">
            <NavLink end to={"/"} className="nav-link">
              Inicio
            </NavLink>
            <NavLink end to={"/registro"} className="nav-link">
              Registro
            </NavLink>
            {usuarioLogueado.length > 0 ? (
              <>
                <NavLink end to={"/administrador"} className="nav-link">
                  Administrador
                </NavLink>
                <Button variant="danger" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <NavLink end to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
