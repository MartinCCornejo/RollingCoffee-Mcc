import error404 from '../../assets/error404.png'
import { Button, Container } from "react-bootstrap";

const Error404 = () => {
    return (
        <Container className='my-5 pt-5 text-center flex-grow-1'>
            <img src={error404} alt="Imagen del error 404" className='img-fluid' />
            <Button variant='success' className='d-block m-auto'>Volver al inicio</Button>
        </Container>
    );
};

export default Error404;