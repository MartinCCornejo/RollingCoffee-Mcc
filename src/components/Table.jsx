import { Container, Row } from 'react-bootstrap';
import CardProducto from './CardProducto';

const Table = () => {
    return (
        <Container>
            <h1 className='display-5'>Nuestros Productos</h1>
            <Row>
                <CardProducto></CardProducto>
            </Row>
        </Container>
    );
};

export default Table;