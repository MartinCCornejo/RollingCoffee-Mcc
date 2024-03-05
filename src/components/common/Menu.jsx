import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Coffee_Logo.png'

const Menu = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`bg-body-tertiary navbar ${scrolled ? 'box-shadow' : ''}`}>
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <img src={logo} alt="Logo de RollingCOffee" className="img-fluid" width={160}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-medium text-montserrat">
                        <NavLink end to={'/'} className='nav-link'>Inicio</NavLink>
                        <NavLink end to={'/administrador'} className='nav-link'>Administrador</NavLink>
                        <NavLink end to={'/registro'} className='nav-link'>Registro</NavLink>
                        <NavLink end to={'/login'} className='nav-link'>Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
